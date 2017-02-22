#!/bin/bash

# ./schemata/*.yamlとmeta.jsonを結合し、
# schema.jsonを生成する
prmd combine -m meta.json ./schemata > schema.json

prmd doc schema.json > README.md
