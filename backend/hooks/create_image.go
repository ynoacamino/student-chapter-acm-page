package hooks

import (
	"bytes"
	"image"
	"math"

	"github.com/disintegration/imaging"
	"github.com/google/uuid"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/tools/filesystem"

	"github.com/kolesa-team/go-webp/encoder"
	"github.com/kolesa-team/go-webp/webp"
)

const (
	MAX_THUMBNAIL_IMAGE_WIDTH int = 450
	NO_RESIZE                 int = 0
)

const (
	IMAGE_RATIO_1_1  string = "1:1"
	IMAGE_RATIO_4_3  string = "4:3"
	IMAGE_RATIO_3_4  string = "3:4"
	IMAGE_RATIO_16_9 string = "16:9"
	IMAGE_RATIO_9_16 string = "9:16"
)

const (
	IMAGE_FRACTION_1_1  float64 = 1.0
	IMAGE_FRACTION_4_3  float64 = 4.0 / 3.0
	IMAGE_FRACTION_3_4  float64 = 3.0 / 4.0
	IMAGE_FRACTION_16_9 float64 = 16.0 / 9.0
	IMAGE_FRACTION_9_16 float64 = 9.0 / 16.0
)

func resizeImage(img image.Image, ratio string, maxWidth int) image.Image {
	originalWidth := img.Bounds().Dx()
	originalHeight := img.Bounds().Dy()

	var cutImage image.Image

	if ratio == IMAGE_RATIO_1_1 {
		if originalWidth > originalHeight {
			cutImage = imaging.CropAnchor(img, originalHeight, originalHeight, imaging.Center)
		} else {
			cutImage = imaging.CropAnchor(img, originalWidth, originalWidth, imaging.Center)
		}
	}

	if ratio == IMAGE_RATIO_4_3 {
		newWidth := int(float64(originalHeight) * IMAGE_FRACTION_4_3)
		if newWidth > originalWidth {
			newHeight := int(float64(originalWidth) / IMAGE_FRACTION_4_3)
			cutImage = imaging.CropAnchor(img, originalWidth, newHeight, imaging.Center)
		} else {
			cutImage = imaging.CropAnchor(img, newWidth, originalHeight, imaging.Center)
		}
	}

	if ratio == IMAGE_RATIO_3_4 {
		newWidth := int(float64(originalHeight) * IMAGE_FRACTION_3_4)
		if newWidth > originalWidth {
			newHeight := int(float64(originalWidth) / IMAGE_FRACTION_3_4)
			cutImage = imaging.CropAnchor(img, originalWidth, newHeight, imaging.Center)
		} else {
			cutImage = imaging.CropAnchor(img, newWidth, originalHeight, imaging.Center)
		}
	}

	if ratio == IMAGE_RATIO_16_9 {
		newWidth := int(float64(originalHeight) * IMAGE_FRACTION_16_9)
		if newWidth > originalWidth {
			newHeight := int(float64(originalWidth) / IMAGE_FRACTION_16_9)
			cutImage = imaging.CropAnchor(img, originalWidth, newHeight, imaging.Center)
		} else {
			cutImage = imaging.CropAnchor(img, newWidth, originalHeight, imaging.Center)
		}
	}

	if ratio == IMAGE_RATIO_9_16 {
		newWidth := int(float64(originalHeight) * IMAGE_FRACTION_9_16)
		if newWidth > originalWidth {
			newHeight := int(float64(originalWidth) / IMAGE_FRACTION_9_16)
			cutImage = imaging.CropAnchor(img, originalWidth, newHeight, imaging.Center)
		} else {
			cutImage = imaging.CropAnchor(img, newWidth, originalHeight, imaging.Center)
		}
	}

	if maxWidth == NO_RESIZE {
		return cutImage
	}

	return imaging.Resize(cutImage, maxWidth, 0, imaging.Lanczos)
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

func getImageRatio(width, height int) string {
	proportion := float64(width) / float64(height)

	diff_9_16 := math.Abs(proportion - IMAGE_FRACTION_9_16)
	diff_3_4 := math.Abs(proportion - IMAGE_FRACTION_3_4)
	diff_1_1 := math.Abs(proportion - IMAGE_FRACTION_1_1)
	diff_4_3 := math.Abs(proportion - IMAGE_FRACTION_4_3)
	diff_16_9 := math.Abs(proportion - IMAGE_FRACTION_16_9)

	if proportion <= IMAGE_FRACTION_9_16 {
		return IMAGE_RATIO_9_16
	}

	if proportion <= IMAGE_FRACTION_3_4 {
		if diff_9_16 < diff_3_4 {
			return IMAGE_RATIO_9_16
		}
		return IMAGE_RATIO_3_4
	}

	if proportion <= IMAGE_FRACTION_1_1 {
		if diff_3_4 < diff_1_1 {
			return IMAGE_RATIO_3_4
		}
		return IMAGE_RATIO_1_1
	}

	if proportion <= IMAGE_FRACTION_4_3 {
		if diff_1_1 < diff_4_3 {
			return IMAGE_RATIO_1_1
		}
		return IMAGE_RATIO_4_3
	}

	if diff_4_3 < diff_16_9 {
		return IMAGE_RATIO_4_3
	}

	return IMAGE_RATIO_16_9
}

func CreateImage(app *pocketbase.PocketBase) {
	app.OnRecordCreateRequest("images").BindFunc(func(e *core.RecordRequestEvent) error {
		originalImageFile := e.Record.GetUnsavedFiles("original")[0]

		file, err := originalImageFile.Reader.Open()
		if err != nil {
			return err
		}
		defer file.Close()

		originalImg, _, err := image.Decode(file)
		if err != nil {
			return err
		}

		imgWidth := originalImg.Bounds().Dx()
		imgHeight := originalImg.Bounds().Dy()

		ratio := e.Record.GetString("ratio")
		if ratio == "" {
			ratio = getImageRatio(imgWidth, imgHeight)
			e.Record.Set("ratio", ratio)
		}

		cutOriginalImg := resizeImage(originalImg, ratio, NO_RESIZE)

		cutResizedImg := resizeImage(originalImg, ratio, MAX_THUMBNAIL_IMAGE_WIDTH)

		imageOriginalWebPFile, err := encodeWebP(cutOriginalImg, 85)
		if err != nil {
			return err
		}
		imageResizedWebPFile, err := encodeWebP(cutResizedImg, 70)
		if err != nil {
			return err
		}

		e.Record.Set("original_width", cutOriginalImg.Bounds().Dx())
		e.Record.Set("original_height", cutOriginalImg.Bounds().Dy())

		e.Record.Set("original", imageOriginalWebPFile)
		e.Record.Set("thumbnail", imageResizedWebPFile)

		app.Save(e.Record)
		return e.Next()
	})
}
