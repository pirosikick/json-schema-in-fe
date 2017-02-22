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
