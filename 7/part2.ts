import { readLines } from '../utils/readLines'
import { movePosition } from './utils/movePosition'
import { createPositionMap } from './utils/positionMap'

export function part2(fileName: string) {
  const positions = readLines(fileName)[0].split(',').map(Number)
  const positionMap = createPositionMap(positions)

  // p1 and p2 points to first and last positions of crabs respectively
  let p1 = Math.min(...positions)
  let p2 = Math.max(...positions)

  let cost = 0

  // continue until all the crabs are in one position
  // O(max-min)
  while (positionMap.size !== 1) {
    const p1Position = positionMap.get(p1)!
    const p2Position = positionMap.get(p2)!

    // move the position with lower cost
    if (p2Position.cost < p1Position.cost) {
      cost += p2Position.cost
      // cost of moving each crab increases by 1
      p2Position.cost += p2Position.count
      movePosition(positionMap, p2, p2 - 1)
      p2--
    } else {
      cost += p1Position.cost
      // cost of moving each crab increases by 1
      p1Position.cost += p1Position.count
      movePosition(positionMap, p1, p1 + 1)
      p1++
    }
  }

  return cost
}
