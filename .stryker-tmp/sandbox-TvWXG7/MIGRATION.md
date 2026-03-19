# Migration Guide: v0.x → v1.0.0

## Overview

v1.0.0 splits the monolithic `util` default export into individual modules while preserving full backward compatibility.

## Build Output

| v0.x | v1.0.0 |
|------|--------|
| `lib/` (CommonJS via `tsc`) | `dist/` (ESM + CJS via `tsup`) |

## Import Styles

### v0.x (still works in v1.0.0)

```ts
import util from 'jell-utils'

util.truncate('hello world', 5)
util.formatNumber(1234567)
util.isKorean('한글')
```

### v1.0.0 — Named imports from root

```ts
import { truncate, formatNumber, isKorean } from 'jell-utils'

truncate('hello world', 5)
```

### v1.0.0 — Subpath imports (tree-shakeable)

```ts
import { truncate } from 'jell-utils/string'
import { formatNumber, formatCurrency } from 'jell-utils/number'
import { isKorean, chosungSearch } from 'jell-utils/korean'
import { isEmail, isPhoneNumber } from 'jell-utils/validation'
import { formatDate, timeAgo } from 'jell-utils/date'
import { clone, deepMerge, pick, omit } from 'jell-utils/object'
import { chunk, groupBy, sortBy, unique } from 'jell-utils/array'
import { retry, timeout, parallel, serial } from 'jell-utils/async'
import { formatBytes, formatPercent } from 'jell-utils/format'
```

## New Functions in v1.0.0

### string
- `truncate(str, maxLength, suffix?)` — truncate with suffix
- `slugify(str)` — URL-friendly slug
- `camelToKebab(str)` — camelCase to kebab-case
- `kebabToCamel(str)` — kebab-case to camelCase
- `maskEmail(email)` — mask email for display
- `maskPhone(phone)` — mask phone for display

### array
- `chunk(array, size)` — split into fixed-size chunks
- `unique(array)` — remove duplicates
- `shuffle(array)` — Fisher-Yates shuffle
- `flatten(array, depth?)` — flatten nested arrays

### object
- `pick(obj, keys)` — pick specific keys
- `omit(obj, keys)` — omit specific keys
- `diff(base, compare)` — get changed keys
- `isEmpty(value)` — check if empty

### async
- `timeout(promise, ms)` — reject promise on timeout
- `parallel(fns, concurrency?)` — run with concurrency limit
- `serial(fns)` — run sequentially

### date
- `relative(date)` — alias for `timeAgo`
- `isWeekend(date)` — check if weekend
- `addDays(date, days)` — add days to date
- `diffDays(date1, date2)` — difference in whole days

### format (new module)
- `formatBytes(bytes, precision?)` — human-readable file size
- `formatPercent(value, decimals?, isDecimal?)` — percentage string

### validation
- `isPhone(phone)` — validate Korean phone (alias for `isPhoneNumber`)
- `isUUID(uuid)` — validate UUID v1-v5

## Breaking Changes

None. All v0.x function names on the default export are preserved.

## TypeScript

v1.0.0 ships `.d.ts` and `.d.mts` declaration files for both CJS and ESM consumers. No `@types/jell-utils` package needed.
