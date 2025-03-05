package main

import (
	"log"
	"os"
	"strings"
	"student-chapter-acm-page/backend/hooks"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/plugins/migratecmd"

	_ "student-chapter-acm-page/backend/migrations"

	_ "github.com/joho/godotenv/autoload"
)

func main() {
	app := pocketbase.New()

	isGoRun := strings.HasPrefix(os.Args[0], os.TempDir())

	migratecmd.MustRegister(app, app.RootCmd, migratecmd.Config{
		Automigrate: isGoRun,
	})

	hooks.HookHandler(app)

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
