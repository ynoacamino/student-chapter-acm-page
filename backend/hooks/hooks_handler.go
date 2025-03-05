package hooks

import "github.com/pocketbase/pocketbase"

func HookHandler(app *pocketbase.PocketBase) {
	CreateImage(app)
}
