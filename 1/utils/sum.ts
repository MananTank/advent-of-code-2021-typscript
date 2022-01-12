/**
 * sum of n elements starting from startIndex in given arr of numbers
 */
export function sum (arr: number[], startIndex: number, n: number) {
  let sum = 0;
  const endIndex = startIndex + n - 1

  if (endIndex > arr.length - 1) {
    throw new Error('invalid value of n, n too large');
  }

  for (let i = startIndex; i <= endIndex; i++) {
    sum += arr[i];
  }

  return sum;
}
