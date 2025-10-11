import util from '../lib'

describe('String Utilities', () => {
  describe('parseTag', () => {
    test('should parse HTML entities', () => {
      expect(util.parseTag('&lt;div&gt;')).toBe('<div>')
      expect(util.parseTag('&lt;hello&gt; world')).toBe('<hello> world')
    })
  })

  describe('toCamelCase', () => {
    test('should convert snake_case to camelCase', () => {
      expect(util.toCamelCase('hello_world')).toBe('helloWorld')
      expect(util.toCamelCase('my_variable_name')).toBe('myVariableName')
    })

    test('should convert space-separated to camelCase', () => {
      expect(util.toCamelCase('hello world')).toBe('helloWorld')
    })
  })

  describe('toSnakeCase', () => {
    test('should convert to snake_case', () => {
      expect(util.toSnakeCase('hello world')).toBe('hello_world')
      expect(util.toSnakeCase('HELLO WORLD')).toBe('hello_world')
    })
  })

  describe('toTitleCase', () => {
    test('should convert to Title Case', () => {
      expect(util.toTitleCase('hello_world')).toBe('Hello World')
      expect(util.toTitleCase('helloWorld')).toBe('Hello World')
    })
  })

  describe('toText and toHtml', () => {
    test('should convert br tags to newlines', () => {
      expect(util.toText('hello<br>world')).toBe('hello\nworld')
    })

    test('should convert newlines to br tags', () => {
      expect(util.toHtml('hello\nworld')).toBe('hello<br>world')
    })
  })

  describe('replaceBetween', () => {
    test('should replace substring between indices', () => {
      expect(util.replaceBetween('hello world', 'XXX', 6, 11)).toBe('hello XXX')
    })
  })

  describe('extractNumbers', () => {
    test('should extract only numbers', () => {
      expect(util.extractNumbers('abc123def456')).toBe('123456')
      expect(util.extractNumbers('010-1234-5678')).toBe('01012345678')
    })
  })

  describe('maskString', () => {
    test('should mask middle part of string', () => {
      expect(util.maskString('01012345678', 3, 4)).toBe('010****5678')
      expect(util.maskString('1234567890123456', 4, 4)).toBe('1234********3456')
    })

    test('should not mask if string is too short', () => {
      expect(util.maskString('123', 3, 3)).toBe('123')
    })
  })

  describe('getFileExtension', () => {
    test('should extract file extension', () => {
      expect(util.getFileExtension('image.jpg')).toBe('jpg')
      expect(util.getFileExtension('document.pdf')).toBe('pdf')
      expect(util.getFileExtension('path/to/file.PNG')).toBe('png')
    })

    test('should return empty string for no extension', () => {
      expect(util.getFileExtension('noextension')).toBe('')
    })
  })
})
