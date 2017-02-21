/* vim: set background=light nolist: */
{
  "name": "pirosikick"
  "age": 28,
  "email": "pirosikick@example.com"
}
// =============
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "age": {
      "type": "integer",
      "minimum": 0
    },
    "email": {
      "type": "string",
      "format": "email"
    }
  }
}
//===============
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "$id": "http://example.com/schema.json#",
  "type": "object",
  "definitions": {
    "name": { ... },
    "age": { ... },
    "email": { ... },
  },
  "properties": {
    "name": {
      "$ref": "#/definitions/name"
    },
    "age": {
      "$ref": "#/definitions/age"
    },
    "email": {
      "$ref": "#/definitions/email"
    }
  }
}
//====================
{
  "$schema": "http://json-schema.org/draft-04/hyper-schema",
  "type": "object",
  "definitions": { ... },
  "properties": { ... },
  "links": [{
    "title": "ユーザ取得",
    "description": "idに紐づくユーザを返す",
    "href": "/user/:id",
    "method": "GET",
    "rel": "self"
  }, {
    "title": "ユーザ新規登録",
    "description": "idに紐づくユーザを返す",
    "href": "/user",
    "method": "POST",
    "rel": "create",
    "schema": {
      "type": "object",
      "properties": { ... }
    }
  }]
}
