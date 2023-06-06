#!/usr/bin/env yarn zx
/*global $*/

const main = async () => {
  await $`rm -rf ./dist`
  await $`swc ./packages --no-swcrc --config-file .swcrc.commonjs -d ./dist/cjs`
  await $`swc ./packages --no-swcrc --config-file .swcrc.esm -d ./dist/esm`
  await $`tsc -p tsconfig.build.json --emitDeclarationOnly --outDir ./dist/types`
}

void main()
