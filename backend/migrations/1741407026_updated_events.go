package migrations

import (
	"github.com/pocketbase/pocketbase/core"
	m "github.com/pocketbase/pocketbase/migrations"
)

func init() {
	m.Register(func(app core.App) error {
		collection, err := app.FindCollectionByNameOrId("pbc_1687431684")
		if err != nil {
			return err
		}

		// add field
		if err := collection.Fields.AddMarshaledJSONAt(8, []byte(`{
			"cascadeDelete": false,
			"collectionId": "pbc_3607937828",
			"hidden": false,
			"id": "relation1194031162",
			"maxSelect": 999,
			"minSelect": 0,
			"name": "gallery",
			"presentable": false,
			"required": false,
			"system": false,
			"type": "relation"
		}`)); err != nil {
			return err
		}

		// add field
		if err := collection.Fields.AddMarshaledJSONAt(9, []byte(`{
			"convertURLs": false,
			"hidden": false,
			"id": "editor3685223346",
			"maxSize": 0,
			"name": "body",
			"presentable": false,
			"required": false,
			"system": false,
			"type": "editor"
		}`)); err != nil {
			return err
		}

		return app.Save(collection)
	}, func(app core.App) error {
		collection, err := app.FindCollectionByNameOrId("pbc_1687431684")
		if err != nil {
			return err
		}

		// remove field
		collection.Fields.RemoveById("relation1194031162")

		// remove field
		collection.Fields.RemoveById("editor3685223346")

		return app.Save(collection)
	})
}
