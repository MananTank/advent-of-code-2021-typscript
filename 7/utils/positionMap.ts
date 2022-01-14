export type PositionInfo = {
  cost: number
  count: number
}

export type PositionMap = Map<number, PositionInfo>

/**
 * costMap stores an array of costs associated with each position
 * Ex: Map{ 2 => [1,2,3] } means that position 2 has 3 crabs with [1,2,3] unit of costs
 * O(n)
 */
export function createPositionMap(positions: number[]) {
  const positionMap: PositionMap = new Map()

  positions.forEach((number) => {
    const positionInfo = positionMap.get(number)
    if (positionInfo) {
      positionInfo.count++
      positionInfo.cost++
    } else {
      positionMap.set(number, {
        cost: 1,
        count: 1
      })
    }
  })

  return positionMap
}
