package migrations

import (
	"github.com/pocketbase/pocketbase/core"
	m "github.com/pocketbase/pocketbase/migrations"
)

func init() {
	m.Register(func(app core.App) error {
		collection, err := app.FindCollectionByNameOrId("pbc_3607937828")
		if err != nil {
			return err
		}

		// add field
		if err := collection.Fields.AddMarshaledJSONAt(6, []byte(`{
			"hidden": false,
			"id": "select4234197119",
			"maxSelect": 1,
			"name": "ratio",
			"presentable": false,
			"required": false,
			"system": false,
			"type": "select",
			"values": [
				"1:1",
				"4:3",
				"3:4",
				"16:9",
				"9:16"
			]
		}`)); err != nil {
			return err
		}

		// add field
		if err := collection.Fields.AddMarshaledJSONAt(7, []byte(`{
			"hidden": false,
			"id": "select105650625",
			"maxSelect": 1,
			"name": "category",
			"presentable": false,
			"required": true,
			"system": false,
			"type": "select",
			"values": [
				"committee",
				"virtual_event",
				"in_person_event",
				"achievements"
			]
		}`)); err != nil {
			return err
		}

		return app.Save(collection)
	}, func(app core.App) error {
		collection, err := app.FindCollectionByNameOrId("pbc_3607937828")
		if err != nil {
			return err
		}

		// remove field
		collection.Fields.RemoveById("select4234197119")

		// remove field
		collection.Fields.RemoveById("select105650625")

		return app.Save(collection)
	})
}
