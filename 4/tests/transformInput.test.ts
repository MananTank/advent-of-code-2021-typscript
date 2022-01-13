import { transformInput } from '../utils/transformInput'
import { Board } from '../utils/types'

const input = `\
1,2,3,4,5

10 20
30 40

10 20
30 40`

test('transformInput', () => {
  const inputLines = input.split('\n')

  const { numbers, boards } = transformInput(inputLines)

  expect(numbers).toEqual([1, 2, 3, 4, 5])

  const num = (row: number, col: number) => ({
    row,
    col,
    marked: false
  })

  const board: Board = {
    nums: {
      10: num(0, 0),
      20: num(0, 1),
      30: num(1, 0),
      40: num(1, 1)
    },
    pos: {
      '0,0': 10,
      '0,1': 20,
      '1,0': 30,
      '1,1': 40
    }
  }

  expect(boards).toEqual([board, board])
})
