import { Line, Point } from './types'

/**
 * convert string input to Line
 */
export function stringToLine(str: string) {
  return str.split(' -> ').map((s) => {
    const [a, b] = s.split(',').map(Number)
    return { x: b, y: a }
  }) as Line
}

/**
 * returns true if both points are on diagonal
 */
export function onDiag(a: Point, b: Point) {
  return Math.abs(b.x - a.x) === Math.abs(b.y - a.y)
}

/**
 * return true if line is horizontal or vertical line
 */
export function isHVLine(line: Line) {
  const [a, b] = line
  return a.x === b.x || a.y === b.y
}

/**
 * return true if line is horizontal or vertical or diagonal line
 */
export function isHVDLine(line: Line) {
  const [a, b] = line
  return a.x === b.x || a.y === b.y || onDiag(a, b)
}
