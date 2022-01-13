import { Board } from './types'

const diagKeys = ['0,0', '1,1', '2,2', '3,3', '4,4', '0,4', '4,0', '1,3', '3,1']

/**
 * check for bingo in the row, column and diagonal? of drawn number
 */
export function hasBingo(board: Board, drawnNumber: number) {
  const { row, col } = board.nums[drawnNumber]

  let bingo = true
  for (let colIndex = 0; colIndex < 5; colIndex++) {
    const num = board.pos[`${row},${colIndex}`]
    if (!board.nums[num].marked) {
      bingo = false
      break
    }
  }

  if (bingo) return true
  else bingo = true

  for (let rowIndex = 0; rowIndex < 5; rowIndex++) {
    const num = board.pos[`${rowIndex},${col}`]
    if (!board.nums[num].marked) {
      bingo = false
      break
    }
  }

  if (bingo) return true
  else bingo = true

  for (const diagKey of diagKeys) {
    const num = board.pos[diagKey]
    if (!board.nums[num].marked) {
      bingo = false
      break
    }
  }

  return bingo
}
