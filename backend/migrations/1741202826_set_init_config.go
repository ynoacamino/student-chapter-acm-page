package migrations

import (
	"os"

	"github.com/pocketbase/pocketbase/core"
	m "github.com/pocketbase/pocketbase/migrations"
)

func init() {
	m.Register(func(app core.App) error {
		settings := app.Settings()

		APP_URL := os.Getenv("APP_URL")

		settings.Meta.AppName = "student-chapter-acm-page"
		settings.Meta.AppURL = APP_URL

		return app.Save(settings)
	}, nil)
}
