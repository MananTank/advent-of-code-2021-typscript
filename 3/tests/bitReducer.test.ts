import { bitReducer } from '../utils/bitReducer'
import { pickMostCommonBit, pickLeastCommonBit } from '../utils/bits'

test('bitReducer, pick the most bits', () => {
  const output = bitReducer(['001', '100', '111', '110'], pickMostCommonBit)

  // '001', '100', '111', '110'
  // bitIndex: 0 -> mostCommon: 1
  // '100', '111', '110'
  // bitIndex: 1 -> mostCommon: 1
  // '111', '110'
  // bitIndex: 2 -> 0 and 1 same, keep 1
  // 111

  expect(output).toBe('111')
})

test('bitReducer, pick the least common bits', () => {
  const output = bitReducer(['001', '010', '111', '110'], pickLeastCommonBit)

  // '001', '010', '111', '110'
  // bitIndex: 0 -> same: keep the 0
  // '001', '010'
  // bitIndex: 1 -> same: keep 0
  // '001'

  expect(output).toBe('001')
})
