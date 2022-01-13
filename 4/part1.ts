import { readLines } from '../utils/readlines'
import { getUnmarkedSum } from './utils/getUnmarkedSum'
import { hasBingo } from './utils/hasBingo'
import { transformInput } from './utils/transformInput'

export function part1(fileName: string) {
  const inputLines = readLines(fileName)
  const { numbers, boards } = transformInput(inputLines)

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i]

    for (let b = 0; b < boards.length; b++) {
      const board = boards[b]
      if (num in board.nums) {
        board.nums[num].marked = true

        if (i >= 5 && hasBingo(board, num)) {
          const unmarkedSum = getUnmarkedSum(board)
          return unmarkedSum * num
        }
      }
    }
  }
}
