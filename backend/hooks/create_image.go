package hooks

import (
	"bytes"
	"image"

	"github.com/disintegration/imaging"
	"github.com/google/uuid"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/tools/filesystem"

	"github.com/kolesa-team/go-webp/encoder"
	"github.com/kolesa-team/go-webp/webp"
)

const (
	MAX_THUMBNAIL_IMAGE_WIDTH = 450
)

func resizeImage(img image.Image, maxWidth int) image.Image {
	originalWidth := img.Bounds().Dx()
	originalHeight := img.Bounds().Dy()
	newHeight := (maxWidth * originalHeight) / originalWidth

	return imaging.Resize(img, maxWidth, newHeight, imaging.Lanczos)
}

func encodeWebP(img image.Image, quality float32) (*filesystem.File, error) {
	output := new(bytes.Buffer)

	options, err := encoder.NewLossyEncoderOptions(encoder.PresetDefault, quality)
	if err != nil {
		return nil, err
	}

	if err := webp.Encode(output, img, options); err != nil {
		return nil, err
	}

	return filesystem.NewFileFromBytes(output.Bytes(), uuid.NewString()+".webp")
}

func CreateImage(app *pocketbase.PocketBase) {
	app.OnRecordCreateRequest("images").BindFunc(func(e *core.RecordRequestEvent) error {
		originalImageFile := e.Record.GetUnsavedFiles("original")[0]

		file, err := originalImageFile.Reader.Open()
		if err != nil {
			return err
		}
		defer file.Close()

		img, _, err := image.Decode(file)
		if err != nil {
			return err
		}

		imgWidth := img.Bounds().Dx()
		imgHeight := img.Bounds().Dy()

		e.Record.Set("original_width", imgWidth)
		e.Record.Set("original_height", imgHeight)

		resizedImg := resizeImage(img, MAX_THUMBNAIL_IMAGE_WIDTH)

		imageWebPFile, err := encodeWebP(img, 85)
		if err != nil {
			return err
		}
		imageResizedWebPFile, err := encodeWebP(resizedImg, 70)
		if err != nil {
			return err
		}

		e.Record.Set("thumbnail", imageResizedWebPFile)
		e.Record.Set("original", imageWebPFile)

		app.Save(e.Record)

		return e.Next()
	})
}
