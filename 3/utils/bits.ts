export type BitPositionInfo = {
  // index of numbers which has bit 0 on this bit position
  0: Set<number>
  // index of numbers which has bit 1 on this bit position
  1: Set<number>
}

/**
 * get a bit position info array
 * each item in array consists information about which numbers have which bit on a given bit position
 * O(n * bits)
 */
export function getBitInfoArray(binaryNumbers: string[]) {
  const length = binaryNumbers[0].length

  // O(n)
  const bitInfoArray = new Array(length).fill(null).map(() => {
    return {
      0: new Set(),
      1: new Set()
    }
  }) as BitPositionInfo[]

  // O(n * bits)
  binaryNumbers.forEach((binaryNumber, numberIndex) => {
    for (let bitIndex = 0; bitIndex < length; bitIndex++) {
      const bit = Number(binaryNumber[bitIndex]) as 0 | 1
      const bitInfo = bitInfoArray[bitIndex]
      bitInfo[bit].add(numberIndex)
    }
  })

  return bitInfoArray
}

/**
 * get an array of most common bits for each bit position
 * O(n)
 */
export function getMostCommonBits(bitInfoArray: BitPositionInfo[]) {
  return bitInfoArray.map((bitInfo) =>
    bitInfo[0].size > bitInfo[1].size ? 0 : 1
  )
}

/**
 * Get an array of least common bits for each bit position
 * O(n)
 */
export function getLeastCommonBits(bitInfoArray: BitPositionInfo[]) {
  return bitInfoArray.map((bitInfo) =>
    bitInfo[0].size > bitInfo[1].size ? 1 : 0
  )
}

/**
 * Picks the least common bit, if both same keep the 0
 * O(1)
 */
export function pickLeastCommonBit(bitInfo: BitPositionInfo) {
  return bitInfo[0].size <= bitInfo[1].size ? 0 : 1
}

/**
 * picks the most common bit, if both same keep the 1
 * O(1)
 */
export function pickMostCommonBit(bitInfo: BitPositionInfo) {
  return bitInfo[1].size >= bitInfo[0].size ? 1 : 0
}
