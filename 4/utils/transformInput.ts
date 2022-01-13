import { Board } from './types'

export function transformInput(inputLines: string[]) {
  let numbers: number[] = []
  const boards: Board[] = []

  // convert input stream to input objects
  let rowIndex = 0

  inputLines.forEach((line, index) => {
    if (index === 0) {
      numbers = line.split(',').map(Number)
    } else if (line === '') {
      rowIndex = 0
      boards.push({
        nums: {},
        pos: {}
      })
    } else {
      const row = line.trim().split(/\s+/).map(Number)
      const board = boards[boards.length - 1]

      // fill board
      row.forEach((num: number, colIndex: number) => {
        board.nums[num] = {
          row: rowIndex,
          col: colIndex,
          marked: false
        }

        board.pos[`${rowIndex},${colIndex}`] = num
      })

      rowIndex++
    }
  })

  return {
    numbers,
    boards
  }
}
