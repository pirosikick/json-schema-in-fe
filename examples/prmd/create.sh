#!/bin/bash
# vim: set background=light nolist nonumber:

# 雛形を生成
# - schemata以下にリソース毎にファイルを生成
# - JSONとYAMLで書くことが出来る（--yamlでYAML）
prmd init --yaml user > schemata/user.yaml

# JSON Hyper-Schema（schema.json）の生成
# - ./schemata/*.{yaml,json}とmeta.jsonを結合して生成する
prmd combine -m meta.json ./schemata > schema.json

# Markdownの生成
# - prmd combineで生成したschema.jsonからREADME.mdを生成
# - OVERVIEW.mdを出力ファイルの先頭に挿入
prmd doc --prepend OVERVIEW.md schema.json > README.md
