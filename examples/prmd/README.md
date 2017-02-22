# prmdのサンプル

## インストール

```
gem install prmd
```

### 雛形の生成

- `schemata/`以下に各リソース毎にJSON Hyper-Schemaを書きます
- フォーマットはJSONとYAMLで記述可能です

```sh
# JSON
prmd init リソース名 > schemata/リソース名.json

# YAML
prmd init --yaml リソース名 > schemata/リソース名.json

# 例
prmd init --yaml user > schemata/user.yaml
```

### schema.jsonを生成

```sh
# schemata/以下のschemaとmeta.jsonを結合し
# schema.jsonを出力します
prmd combine --meta meta.json ./schemata > schema.json
```

meta.jsonはAPI自体のtitile, description, linksを記載します

### Markdownを生成

```sh
prmd doc --prepend Overview.md schema.json > README.md
```

`--prepend ファイル`で、出力ファイルの先頭に別のドキュメントを結合できます。

## 以下、実際に生成したMarkdown


## <a name="resource-user">User</a>

Stability: `prototype`

ユーザ情報

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | 登録日時 | `"2015-01-01T12:00:00Z"` |
| **email** | *email* | メールアドレス | `"username@example.com"` |
| **id** | *uuid* | 一意なユーザID | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | 一意なユーザ名 | `"example"` |
| **twitter** | *url* | TwitterのURL |  |
| **updated_at** | *date-time* | 更新日時 | `"2015-01-01T12:00:00Z"` |

### <a name="link-POST-user-/users">User ユーザ登録</a>

ユーザの登録

```
POST /users
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **email** | *email* | メールアドレス | `"username@example.com"` |
| **name** | *string* | 一意なユーザ名 | `"example"` |
| **twitter** | *url* | TwitterのURL |  |


#### Curl Example

```bash
$ curl -n -X POST http://api.example.com/users \
  -d '{
  "name": "example",
  "email": "username@example.com",
  "twitter": "example"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "email": "username@example.com",
  "twitter": "example",
  "created_at": "2015-01-01T12:00:00Z",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### <a name="link-DELETE-user-/users/{(%23%2Fdefinitions%2Fuser%2Fdefinitions%2Fidentity)}">User Delete</a>

ユーザの削除

```
DELETE /users/{user_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X DELETE http://api.example.com/users/$USER_ID_OR_NAME \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "email": "username@example.com",
  "twitter": "example",
  "created_at": "2015-01-01T12:00:00Z",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### <a name="link-GET-user-/users/{(%23%2Fdefinitions%2Fuser%2Fdefinitions%2Fidentity)}">User Info</a>

ユーザ削除

```
GET /users/{user_id_or_name}
```


#### Curl Example

```bash
$ curl -n http://api.example.com/users/$USER_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "email": "username@example.com",
  "twitter": "example",
  "created_at": "2015-01-01T12:00:00Z",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### <a name="link-GET-user-/users">User ユーザ一覧</a>

ユーザの一覧

```
GET /users
```


#### Curl Example

```bash
$ curl -n http://api.example.com/users
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example",
    "email": "username@example.com",
    "twitter": "example",
    "created_at": "2015-01-01T12:00:00Z",
    "updated_at": "2015-01-01T12:00:00Z"
  }
]
```

### <a name="link-PATCH-user-/users/{(%23%2Fdefinitions%2Fuser%2Fdefinitions%2Fidentity)}">User Update</a>

ユーザ情報の更新

```
PATCH /users/{user_id_or_name}
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **email** | *email* | メールアドレス | `"username@example.com"` |
| **twitter** | *url* | TwitterのURL |  |


#### Curl Example

```bash
$ curl -n -X PATCH http://api.example.com/users/$USER_ID_OR_NAME \
  -d '{
  "email": "username@example.com",
  "twitter": "example"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "email": "username@example.com",
  "twitter": "example",
  "created_at": "2015-01-01T12:00:00Z",
  "updated_at": "2015-01-01T12:00:00Z"
}
```


