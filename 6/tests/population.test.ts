import { updatePopulations } from '../utils/population'

test('updatePopulations', () => {
  const populations = [10, 1, 2, 3, 4, 5, 6, 7, 8]
  updatePopulations(populations)
  expect(populations).toEqual([1, 2, 3, 4, 5, 6, 17, 8, 10])
  updatePopulations(populations)
  expect(populations).toEqual([2, 3, 4, 5, 6, 17, 9, 10, 1])
})
