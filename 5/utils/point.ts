import { Line } from './types'

/**
 * return all points in the middle of two anchor points
 */
export function getPointsInLine(line: Line) {
  const [p1, p2] = line
  const points = [p1, p2]

  // both points have the same y coordinate
  if (p1.y === p2.y) {
    // a is the point with smaller x coordinate
    const [a, b] = p1.x < p2.x ? [p1, p2] : [p2, p1]
    // generate points by adding 1 to smaller x till we reach the bigger x
    for (let i = a.x + 1; i < b.x; i++) {
      points.push({ x: i, y: a.y })
    }
  }

  // if both points have the same x coordinate
  else if (p1.x === p2.x) {
    // a is the point with smaller y coordinate
    const [a, b] = p1.y < p2.y ? [p1, p2] : [p2, p1]
    // generate points by adding 1 to smaller y till we reach the bigger y
    for (let y = a.y + 1; y < b.y; y++) {
      points.push({ y, x: a.x })
    }
  }

  // if the points are in a diagonal with 45deg or -45deg
  else {
    const [a, b] = p1.y < p2.y ? [p1, p2] : [p2, p1]
    const x = a.x < b.x ? 1 : -1
    let i = 0
    for (let y = a.y + 1; y < b.y; y++) {
      i += x
      points.push({ y, x: a.x + i })
    }
  }

  return points
}
