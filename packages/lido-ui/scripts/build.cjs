#!/usr/bin/env yarn zx
/*global $*/

const main = async () => {
  await $`rm -rf ./dist`
  await $`rollup -c`
  await $`tsc --project tsconfig.production.json`
}

void main()
