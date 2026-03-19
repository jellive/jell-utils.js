// @ts-nocheck
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    string: 'src/string/index.ts',
    array: 'src/array/index.ts',
    object: 'src/object/index.ts',
    async: 'src/async/index.ts',
    date: 'src/date/index.ts',
    korean: 'src/korean/index.ts',
    number: 'src/number/index.ts',
    validation: 'src/validation/index.ts',
    format: 'src/format/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
  sourcemap: false,
  splitting: false,
})
