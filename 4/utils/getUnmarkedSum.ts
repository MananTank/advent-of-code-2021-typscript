import { Board } from './types'

/**
 * get sum of all the unmarked numbers
 */
export function getUnmarkedSum(board: Board) {
  let unmarkedNumberSum = 0

  Object.keys(board.nums).forEach((key) => {
    const boardNumber = Number(key)
    if (!board.nums[boardNumber].marked) {
      unmarkedNumberSum += boardNumber
    }
  })

  return unmarkedNumberSum
}
