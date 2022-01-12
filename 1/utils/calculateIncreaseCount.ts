import { sum } from './sum'

/**
 * Returns the number of times the window n+1 has higher sum that window n
 * each window having the windowSize number of elements
 */
export function calculateIncreaseCount (numbers: number[], windowSize: number) {
  // calculate all sums at once to avoid calculating them twice when comparing
  const windowSums = []

  const lastWindowStartIndex = numbers.length - windowSize

  for (let i = 0; i <= lastWindowStartIndex; i++) {
    windowSums.push(sum(numbers, i, windowSize))
  }

  // increase the `increaseCount` when sum[i+1] is larger than sum[i]
  let increaseCount = 0

  // skip the first one
  for (let i = 1; i < windowSums.length; i++) {
    // add 1 to increaseCount if sum(i) is greater than sum(i-1)
    if (windowSums[i] > windowSums[i - 1]) {
      increaseCount++
    }
  }

  return increaseCount
}
