import { getPointsInLine } from './point'
import { Line, Matrix, Point } from './types'

export function createMatrixWithLines(lines: Line[]) {
  // create matrix that can fit all lines
  const dimension = getMatrixDimension(lines)
  const matrix = createMatrix(dimension.x, dimension.y, 0)

  // plot all points
  lines.forEach((line) => {
    getPointsInLine(line).forEach((point) => {
      plot(matrix, point)
    })
  })

  return matrix
}

/**
 * call the given function for each value in matrix
 * if it returns true increase the counter
 * count how many times given values comes in the matrix
 */
export function countMatchesInMatrix(
  matrix: Matrix,
  cb: (value: number) => boolean
) {
  let count = 0
  for (const row of matrix) {
    for (const num of row) {
      if (cb(num)) {
        count++
      }
    }
  }

  return count
}

/**
 * create a matrix and fill it with given fillValue
 */
export function createMatrix(x: number, y: number, fillValue: number): Matrix {
  return new Array(x + 1).fill(null).map(() => new Array(y + 1).fill(fillValue))
}

/**
 * return the dimension required to fit all given  lines
 */
export function getMatrixDimension(lines: Line[]) {
  let maxX = lines[0][0].x
  let maxY = lines[0][0].y

  lines.forEach((line) => {
    const [a, b] = line
    maxX = Math.max(a.x, b.x, maxX)
    maxY = Math.max(a.y, b.y, maxY)
  })

  return {
    x: maxX,
    y: maxY
  }
}

/**
 * add the number in matrix
 */
export function plot(matrix: Matrix, point: Point) {
  const { x, y } = point

  if (!(x in matrix)) {
    matrix[x] = []
  }
  if (!(y in matrix[x])) {
    matrix[x][y] = 0
  } else {
    matrix[x][y]++
  }
}

/**
 * for debugging the code:
 * draw the matrix
 */
export function drawMatrix(matrix: Matrix) {
  console.log(
    matrix
      .map((arr) => arr.map((i) => (i === 0 ? '.' : i)).join(' '))
      .join('\n')
  )
}
