import { readLines } from '../utils/readlines'
import { getUnmarkedSum } from './utils/getUnmarkedSum'
import { hasBingo } from './utils/hasBingo'
import { transformInput } from './utils/transformInput'

export function part2(fileName: string) {
  const inputLines = readLines(fileName)
  const { numbers, boards } = transformInput(inputLines)

  // boards that already have the bingo
  const bingoBoards: Set<number> = new Set()

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i]

    for (let b = 0; b < boards.length; b++) {
      // don't do anything with the boards that already has done the bingo
      if (bingoBoards.has(b)) {
        continue
      }

      const board = boards[b]
      if (num in board.nums) {
        board.nums[num].marked = true

        if (i >= 5 && hasBingo(board, num)) {
          bingoBoards.add(b)
          // when the last board has bingo
          if (bingoBoards.size === boards.length) {
            const unmarkedSum = getUnmarkedSum(board)
            return unmarkedSum * num
          }
        }
      }
    }
  }
}
