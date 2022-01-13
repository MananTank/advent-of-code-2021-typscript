import { BitPositionInfo, getBitInfoArray } from './bits'

/**
 * for each binary numbers, pick a bit using given getBit callback that accepts a bitInfo object
 * numbers with picked bit on certain bit position is removed
 * process repeats until only one number remains
 */
export function bitReducer(
  binaryNumbers: string[],
  pickBit: (bitInfo: BitPositionInfo) => 0 | 1
) {
  // start with set containing index of all numbers
  const set: Set<number> = new Set()
  for (let i = 0; i < binaryNumbers.length; i++) {
    set.add(i)
  }

  const bitInfoArray = getBitInfoArray(binaryNumbers)

  let bitIndex = 0

  while (set.size !== 1) {
    if (bitIndex > binaryNumbers.length - 1) {
      throw new Error('could not reduce the numbers to a single number')
    }
    const pickedBit = pickBit(bitInfoArray[bitIndex])

    // remove index of numbers from set which are not picked by pickBit
    const bitToRemove = pickedBit === 0 ? 1 : 0

    // set of indexes of numbers that needs to be removed from set and from bitInfoArray
    const indexesToRemove = bitInfoArray[bitIndex][bitToRemove]

    indexesToRemove.forEach((numberIndex) => {
      // if zero is more common, remove numbers with one from set
      set.delete(numberIndex)
      // remove those numbers from bitInfo as well
      bitInfoArray.forEach((bitInfo) => {
        bitInfo[0].delete(numberIndex)
        bitInfo[1].delete(numberIndex)
      })
    })

    // remove
    bitIndex++
  }

  const index = [...set.values()][0]
  return binaryNumbers[index]
}
