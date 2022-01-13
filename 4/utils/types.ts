export type BoardNumber = {
  col: number
  row: number
  marked: boolean
}

export type Board = {
  // 'number': info
  nums: Record<number, BoardNumber>
  // 'row,col': number
  pos: Record<string, number>
}
