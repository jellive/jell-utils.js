## Jell-utils

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]

<!-- [![Build status][travis-image]][travis-url] -->

[![Test coverage][coveralls-image]][coveralls-url]

This is personal project.

JavaScript/TypeScript 개발에 유용한 유틸리티 함수 모음입니다. 특히 한국어 처리, 날짜 포맷, 문자열 변환, 객체 조작 등의 기능을 제공합니다.

## 설치

```bash
npm install jell-utils
```

또는

```bash
yarn add jell-utils
```

## 사용법

```typescript
import util from 'jell-utils'

// 한국어 문자열 검사
util.isKorean('안녕하세요') // true
util.isKorean('hello') // false

// 날짜 포맷
util.getKoreanDate(new Date(), true) // "2024년 03월 15일"
util.formatDate(new Date()) // "2024-03-15"

// 문자열 변환
util.toCamelCase('hello_world') // "helloWorld"
util.toSnakeCase('Hello World') // "hello_world"
```

## API 레퍼런스

### 한국어 유틸리티

#### `isKorean(message: string): boolean`

문자열에 한국어가 포함되어 있는지 확인합니다.

```typescript
util.isKorean('안녕하세요') // true
util.isKorean('한글test') // true
util.isKorean('hello') // false
```

#### `isBusinessNumber(businessNumber: string): boolean`

사업자등록번호의 유효성을 검증합니다.

```typescript
util.isBusinessNumber('1018626554') // true
util.isBusinessNumber('101-86-26554') // true (하이픈 자동 제거)
util.isBusinessNumber('1234567890') // false
```

#### `chosungSearch(str: string, search: string): boolean`

한글 초성 검색을 지원합니다.

```typescript
util.chosungSearch('사과', 'ㅅㄱ') // true
util.chosungSearch('김철수', 'ㄱㅊㅅ') // true
util.chosungSearch('바나나', 'ㅅㄱ') // false
```

### 날짜 유틸리티

#### `getNowDate(): string`

현재 시간을 `YYYY-MM-DD HH:mm:ss` 형식으로 반환합니다.

```typescript
util.getNowDate() // "2024-03-15 14:30:25"
```

#### `getKoreanDate(dateString?: Date | string, isYear?: boolean): string`

날짜를 한국어 형식으로 변환합니다.

```typescript
util.getKoreanDate(new Date('2024-03-15'), false) // "03월 15일"
util.getKoreanDate(new Date('2024-03-15'), true) // "2024년 03월 15일"
```

#### `formatDate(date?: Date | string): string`

날짜를 `YYYY-MM-DD` 형식으로 변환합니다.

```typescript
util.formatDate(new Date('2024-03-15')) // "2024-03-15"
```

#### `calDDay(date: Date | string): number`

D-day를 계산합니다.

```typescript
const targetDate = new Date('2024-12-25')
util.calDDay(targetDate) // 목표 날짜까지 남은 일수
```

#### `dateDiff(date1: Date | string, date2?: Date | string): object`

두 날짜 사이의 차이를 계산합니다.

```typescript
util.dateDiff('2024-01-01', '2024-01-02')
// { days: 1, hours: 0, minutes: 0, seconds: 0 }
```

### 문자열 유틸리티

#### `toCamelCase(txt: string): string`

문자열을 camelCase로 변환합니다.

```typescript
util.toCamelCase('hello_world') // "helloWorld"
util.toCamelCase('my variable name') // "myVariableName"
```

#### `toSnakeCase(txt: string): string`

문자열을 snake_case로 변환합니다.

```typescript
util.toSnakeCase('Hello World') // "hello_world"
util.toSnakeCase('camelCase') // "camelcase"
```

#### `toTitleCase(txt: string): string`

문자열을 Title Case로 변환합니다.

```typescript
util.toTitleCase('hello_world') // "Hello World"
util.toTitleCase('helloWorld') // "Hello World"
```

#### `parseTag(txt: string): string`

HTML 엔티티를 파싱합니다.

```typescript
util.parseTag('&lt;div&gt;') // "<div>"
```

#### `toText(txt: string): string`

HTML `<br>` 태그를 줄바꿈 문자로 변환합니다.

```typescript
util.toText('안녕<br>하세요') // "안녕\n하세요"
```

#### `toHtml(txt: string): string`

줄바꿈 문자를 HTML `<br>` 태그로 변환합니다.

```typescript
util.toHtml('안녕\n하세요') // "안녕<br>하세요"
```

#### `clearTag(txt: string, preserveErrorTags?: boolean): string`

HTML 태그를 안전하게 제거합니다.

```typescript
util.clearTag('<div>안녕하세요</div>') // "안녕하세요"
```

#### `replaceBetween(str: string, txt: string, startIndex: number, endIndex: number): string`

문자열의 특정 구간을 다른 문자열로 교체합니다.

```typescript
util.replaceBetween('hello world', 'XXX', 6, 11) // "hello XXX"
```

#### `extractNumbers(str: string): string`

문자열에서 숫자만 추출합니다.

```typescript
util.extractNumbers('010-1234-5678') // "01012345678"
util.extractNumbers('abc123def456') // "123456"
```

#### `maskString(str: string, visibleStart?: number, visibleEnd?: number, maskChar?: string): string`

민감한 정보를 마스킹합니다.

```typescript
util.maskString('01012345678', 3, 4) // "010****5678"
util.maskString('1234567890123456', 4, 4) // "1234********3456"
```

#### `getFileExtension(filename: string): string`

파일명에서 확장자를 추출합니다.

```typescript
util.getFileExtension('image.jpg') // "jpg"
util.getFileExtension('document.PDF') // "pdf"
```

### 숫자 유틸리티

#### `parseNumber(target: string, defaultValue: number, isFloat?: boolean): number`

문자열을 숫자로 안전하게 파싱합니다.

```typescript
util.parseNumber('123', 0) // 123
util.parseNumber('123.45', 0, true) // 123.45
util.parseNumber('abc', 0) // 0 (기본값 반환)
```

#### `parseTime(target: string, defaultValue: number): number`

시간 문자열을 밀리초로 변환합니다.

```typescript
util.parseTime('01:30', 0) // 90000 (1분 30초 = 90000ms)
util.parseTime('01:30:45', 0) // 90045 (1분 30초 45ms)
```

### 객체 유틸리티

#### `clone<T>(obj: T): T`

객체를 깊은 복사합니다.

```typescript
const original = { a: 1, b: { c: 2 } }
const copied = util.clone(original)
copied.b.c = 3
console.log(original.b.c) // 2 (원본은 변경되지 않음)
```

#### `getByPath<T>(obj: object, path: string, defaultValue?: T): T`

경로 문자열로 중첩된 객체의 값을 가져옵니다.

```typescript
const obj = { user: { profile: { name: 'John' } } }
util.getByPath(obj, 'user.profile.name') // "John"
util.getByPath(obj, 'user.age', 0) // 0 (기본값)
```

#### `setByPath(obj: object, path: string, value: any): void`

경로 문자열로 중첩된 객체의 값을 설정합니다.

```typescript
const obj = {}
util.setByPath(obj, 'user.profile.name', 'John')
// obj = { user: { profile: { name: 'John' } } }
```

#### `deepMerge<T>(target: T, source: Partial<T>): T`

두 객체를 깊게 병합합니다.

```typescript
const target = { a: 1, b: { c: 2, d: 3 } }
const source = { b: { d: 4, e: 5 }, f: 6 }
util.deepMerge(target, source)
// { a: 1, b: { c: 2, d: 4, e: 5 }, f: 6 }
```

#### `objectToQueryString(obj: object): string`

객체를 URL 쿼리 스트링으로 변환합니다.

```typescript
util.objectToQueryString({ name: 'John', age: 30 })
// "name=John&age=30"
```

### 배열 유틸리티

#### `equalArrays(a: unknown[], b: unknown[]): boolean`

두 배열이 같은지 비교합니다 (얕은 비교).

```typescript
util.equalArrays([1, 2, 3], [1, 2, 3]) // true
util.equalArrays([1, 2, 3], [1, 2, 4]) // false
```

#### `groupBy<T>(array: T[], key: keyof T): Record<string, T[]>`

배열을 특정 키 기준으로 그룹화합니다.

```typescript
const items = [
  { name: 'Apple', category: 'fruit' },
  { name: 'Carrot', category: 'vegetable' },
  { name: 'Banana', category: 'fruit' }
]
util.groupBy(items, 'category')
// {
//   fruit: [{ name: 'Apple', ... }, { name: 'Banana', ... }],
//   vegetable: [{ name: 'Carrot', ... }]
// }
```

#### `sortBy<T>(array: T[], key: keyof T, order?: 'asc' | 'desc'): T[]`

배열을 특정 키 기준으로 정렬합니다.

```typescript
const items = [
  { name: 'Charlie', age: 30 },
  { name: 'Alice', age: 25 }
]
util.sortBy(items, 'age', 'asc')
// [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }]
```

### 비동기 유틸리티

#### `retry<T>(fn: () => Promise<T>, maxRetries?: number, delay?: number): Promise<T>`

실패한 비동기 함수를 지수 백오프로 재시도합니다.

```typescript
const fetchData = async () => {
  const response = await fetch('https://api.example.com/data')
  return response.json()
}

// 최대 3번 재시도, 초기 지연 1초
await util.retry(fetchData, 3, 1000)
```

### 브라우저 유틸리티

#### `isiOS(): boolean`

현재 디바이스가 iOS인지 확인합니다.

```typescript
if (util.isiOS()) {
  console.log('iOS 디바이스입니다')
}
```

## 타입스크립트 지원

이 라이브러리는 TypeScript로 작성되었으며 완전한 타입 정의를 제공합니다.

```typescript
import util from 'jell-utils'

// 타입 추론이 자동으로 작동합니다
const result = util.parseNumber('123', 0) // number
const date = util.getKoreanDate() // string
```

## Change log

### v0.1.0 (2024)

- 🎉 초기 릴리즈
- ✨ 한국어 유틸리티 (isKorean, isBusinessNumber, chosungSearch)
- ✨ 날짜 유틸리티 (getNowDate, getKoreanDate, formatDate, calDDay, dateDiff)
- ✨ 문자열 유틸리티 (toCamelCase, toSnakeCase, toTitleCase, parseTag, toText, toHtml, clearTag, replaceBetween, extractNumbers, maskString, getFileExtension)
- ✨ 숫자 유틸리티 (parseNumber, parseTime)
- ✨ 객체 유틸리티 (clone, getByPath, setByPath, deepMerge, objectToQueryString)
- ✨ 배열 유틸리티 (equalArrays, groupBy, sortBy)
- ✨ 비동기 유틸리티 (retry)
- ✨ 브라우저 유틸리티 (isiOS)
- ✅ Jest를 사용한 테스트 커버리지 추가
- 📝 TypeScript 타입 정의 포함

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/jell-utils.svg
[npm-url]: https://npmjs.org/package/jell-utils
[node-version-image]: https://img.shields.io/node/v/jell-utils.svg
[node-version-url]: https://nodejs.org/en/download/

<!-- [travis-image]: https://img.shields.io/travis/jellive/jell-utils/master.svg
[travis-url]: https://travis-ci.org/jellive/jell-utils -->

[coveralls-image]: https://img.shields.io/coveralls/jellive/jell-utils/master.svg
[coveralls-url]: https://coveralls.io/r/jellive/jell-utils?branch=master
[downloads-image]: https://img.shields.io/npm/dm/jell-utils.svg
[downloads-url]: https://npmjs.org/package/jell-utils
