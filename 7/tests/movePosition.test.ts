import { movePosition } from '../utils/movePosition'
import { createPositionMap } from '../utils/positionMap'

test('movePosition', () => {
  const positionMap = createPositionMap([1, 1, 2, 3, 4, 4])

  movePosition(positionMap, 1, 2)

  // position info on key 1 is deleted
  expect(positionMap.get(1)).toBe(undefined)

  // position info of key 1 is added on key 2
  expect(positionMap.get(2)).toEqual({
    count: 3,
    cost: 3
  })
})
