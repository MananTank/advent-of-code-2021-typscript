import { PositionMap } from './positionMap'

/**
 * add costs on given key of given costMap
 * O(1)
 */
export function movePosition(
  positionMap: PositionMap,
  from: number,
  to: number
) {
  const fromPos = positionMap.get(from)!
  const toPos = positionMap.get(to)

  if (toPos) {
    toPos.cost += fromPos.cost
    toPos.count += fromPos.count
  } else {
    positionMap.set(to, fromPos)
  }

  // delete the from position
  positionMap.delete(from)
}
