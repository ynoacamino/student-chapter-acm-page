package migrations

import (
	"github.com/pocketbase/pocketbase/core"
	m "github.com/pocketbase/pocketbase/migrations"
)

func init() {
	m.Register(func(app core.App) error {
		collection, err := app.FindCollectionByNameOrId("pbc_3572739349")
		if err != nil {
			return err
		}

		// add field
		if err := collection.Fields.AddMarshaledJSONAt(6, []byte(`{
			"cascadeDelete": false,
			"collectionId": "pbc_969198997",
			"hidden": false,
			"id": "relation1468538887",
			"maxSelect": 1,
			"minSelect": 0,
			"name": "social_networks",
			"presentable": false,
			"required": false,
			"system": false,
			"type": "relation"
		}`)); err != nil {
			return err
		}

		return app.Save(collection)
	}, func(app core.App) error {
		collection, err := app.FindCollectionByNameOrId("pbc_3572739349")
		if err != nil {
			return err
		}

		// remove field
		collection.Fields.RemoveById("relation1468538887")

		return app.Save(collection)
	})
}
