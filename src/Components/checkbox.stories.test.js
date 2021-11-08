import Checkboxing from './index'

describe('Our testing', () => {
  test('Должна проверить есть ли свойтво в обьекте', () => {
    return <Checkboxing />
  })
  const can = {
    name: 'pamplemousse',
    ounces: 12,
  }
  expect(can.name).toBe('pamplemousse')
})
