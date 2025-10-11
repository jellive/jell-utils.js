import util from '../lib'

describe('Object Utilities', () => {
  describe('getByPath', () => {
    test('should get nested value by path', () => {
      const obj = { user: { profile: { name: 'John' } } }
      expect(util.getByPath(obj, 'user.profile.name')).toBe('John')
    })

    test('should return default value if path not found', () => {
      const obj = { user: { name: 'John' } }
      expect(util.getByPath(obj, 'user.profile.name', 'default')).toBe(
        'default'
      )
    })
  })

  describe('setByPath', () => {
    test('should set nested value by path', () => {
      const obj: any = {}
      util.setByPath(obj, 'user.profile.name', 'John')
      expect(obj.user.profile.name).toBe('John')
    })

    test('should overwrite existing value', () => {
      const obj: any = { user: { name: 'Jane' } }
      util.setByPath(obj, 'user.name', 'John')
      expect(obj.user.name).toBe('John')
    })
  })

  describe('deepMerge', () => {
    test('should deeply merge two objects', () => {
      const target = { a: 1, b: { c: 2, d: 3 } }
      const source: any = { b: { d: 4, e: 5 }, f: 6 }
      const result = util.deepMerge(target, source)

      expect(result).toEqual({
        a: 1,
        b: { c: 2, d: 4, e: 5 },
        f: 6
      })
    })
  })

  describe('objectToQueryString', () => {
    test('should convert object to query string', () => {
      const obj = { name: 'John', age: 30, city: 'Seoul' }
      const result = util.objectToQueryString(obj)
      expect(result).toContain('name=John')
      expect(result).toContain('age=30')
      expect(result).toContain('city=Seoul')
    })

    test('should filter out null and undefined values', () => {
      const obj = { name: 'John', age: null, city: undefined }
      const result = util.objectToQueryString(obj)
      expect(result).toBe('name=John')
    })
  })
})
