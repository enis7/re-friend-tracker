export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden

    Key: Bei Listen-Daten kann ein Key mitgegeben werden. Wird kein Key mitgegeben, dann werden nach Klick
    des Zurück-Buttons die Elemente nicht mehr korrekt dargestellt.
    */

    private _guiModel = {
        "application": {
            "title": "Enis Friend Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
						{
							"id": "nickname",
							"type": "text",
							"name": "Nickname",
							"width": 2,
							"required": true
						},
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "data": [ "Winterthur", "Zürich" ],
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id": "evtBirth",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        },
						
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
						{
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
				{
					"id": "GroupForm",
					"title": "Group",
					"formFieldList": [
					{
						"id": "name",
						"type": "text",
						"name": "GroupName",
						"width": 2,
						"required": true
					},
					{
                        "id": "creadate",
                        "type": "date",
                        "name": "CreationDate",
                        "width": 2,
						"required": true
                    },
					{
                        "id": "comment",
                        "type": "text",
                        "name": "Comments",
                        "width": 2,
                        "height": 4,
                        "maxLength": 5000,
                    },
					{
						"type": "deleteButton",
						"name": "Delete"
					},
					{
						"type": "cancelButton",
						"name": "Cancel"
					},
					{
						"type": "okButton",
						"name": "Ok"
					}
					]
				},
				{
					"id": "ActivityForm",
					"title": "Group",
					"formFieldList": [
					{
                        "id":   "activity",
                        "type": "autocomplete",
                        "name": "Activity",
                        "data": [ "Movie", "Pizza", "Running" ],
                        "form": "GroupForm",
                        "width": 2
                    },
					{
                        "id": "creadate",
                        "type": "date",
                        "name": "Date",
                        "width": 2,
						"required": true
                    },
					{
                        "id": "comment",
                        "type": "text",
                        "name": "Comments",
                        "width": 2,
                        "height": 4,
                        "maxLength": 5000,
                    },
					{
						"type": "cancelButton",
						"name": "Cancel"
					},
					{
						"type": "okButton",
						"name": "Ok"
					}
					]
				}
				
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "locationspage",
                        },
						{
							"type": "button",
							"name": "Groups",
							"icon": "fa-weixin",
							"color": "wisteria",
							"page": "groupspage",
						},
						{
							"type": "button",
							"name": "Activity",
							"icon": "fa-calendar",
							"color": "pumpkin",
							"page": "activitypage",
						},
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Anton Amacker" }, { name: "Britta Beavers"} ],
                            "page": "friendDetailPage"
                        },
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Adelboden" }, { name: "Winterthur" }, { name: "Zinal"}, { name: "Zürich"} ],
                            "page": "locationDetailpage"
                        },
                    ]
                },
				{
					"id": "groupspage",
					"elementList": [
						{
							"type": "backbutton",
						},
						{
							"type": "newButton",
							"name": "NewGroup",
							"icon": "fa-weixin",
							"color": "green",
							"form":{
								"form": "GroupForm"
							},
						},
						{
							"type": "list",
							"icon": "fa-weixin",
							"color": "wisteria",
							"search": true,
							"data": [ { name: "Study" }, { name: "Family" }, { name: "School" } ],
							"form": {
								"form": "GroupForm"
							}
						},
					]
					
				},
				{
					"id": "friendDetailPage",
					"elementList": [
						{
							"type": "backbutton",
						},
						{
							"type": "newButton",
							"name": "EditFriend",
							"icon": "fa-user",
							"color": "green",
							"form":{
								"form": "FriendForm"
							},
						},
						{
							"type": "newButton",
							"name": "AddActivity",
							"icon": "fa-calendar",
							"color": "green",
							"form":{
								"form": "ActivityForm"
							},
						},
						{
							"type": "list",
							"icon": "fa-calendar",
							"color": "pumpkin",
							"search": true,
							"data": [ { name: "Movie Why Him" }, { name: "Eating Pizza" }, { name: "Running Eschenberg"} ],
							"form": {
								"form": "ActivityForm"
							}
						},
					]
					
				},
				{
					"id": "activitypage",
					"elementList": [
						{
							"type": "backbutton",
						},
						{
							"type": "newButton",
							"name": "EditActivity",
							"icon": "fa-calendar",
							"color": "green",
							"form":{
								"form": "ActivityForm"
							},
						},
						{
							"type": "list",
							"icon": "fa-calendar",
							"color": "pumpkin",
							"search": true,
							"data": [ { name: "Movie Why Him" }, { name: "Eating Pizza" }, { name: "Running Eschenberg"} ],
							"page": "activityDetailpage"
						},
					]
					
				},
				{
					"id": "activityDetailpage",
					"elementList": [
						{
							"type": "backbutton",
						},
						{
							"type": "newButton",
							"name": "EditActivity",
							"icon": "fa-calendar",
							"color": "green",
							"form":{
								"form": "ActivityForm"
							},
						},
						{
							"type": "newButton",
							"name": "AddFriend",
							"icon": "fa-user",
							"color": "green",
							"form":{
								"form": "FriendForm"
							},
						},
						{
							"type": "list",
							"icon": "fa-calendar",
							"color": "pumpkin",
							"search": true,
							"data": [ { name: "Anton Amacker" }, { name: "Britta Beavers"} ],
							"form": {
								"form": "FriendForm"
							}
						},
					]
					
				},
				{
					"id": "locationDetailpage",
					"elementList": [
						{
							"type": "backbutton",
						},
						{
							"type": "newButton",
							"name": "EditLocation",
							"icon": "fa-home",
							"color": "green",
							"form":{
								"form": "LocationForm"
							},
						},
						{
							"type": "newButton",
							"name": "AddActivity",
							"icon": "fa-calendar",
							"color": "green",
							"form":{
								"form": "ActivityForm"
							},
						},
						{
							"type": "list",
							"icon": "fa-calendar",
							"color": "pumpkin",
							"search": true,
							"data": [ { name: "Movie Why Him" }, { name: "Eating Pizza" }, { name: "Running Eschenberg"} ],
							"form": {
								"form": "FriendForm"
							}
						},
					]
					
				},
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
