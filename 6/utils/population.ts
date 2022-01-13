/**
 * update the population according to given rules
 */
export function updatePopulations(population: number[]) {
  // fish x becomes fish x-1 so we shift the array
  const fish8Population = population.shift() as number
  // fish 8 becomes fish6
  population[6] += fish8Population
  // fish 8 also produces new fish8
  population.push(fish8Population)
}

/**
 * return the total number of fish of all types after given number of days
 */
export function totalFishesAfter(fishes: number[], days: number) {
  const populations: number[] = new Array(9).fill(0)
  fishes.forEach((f) => populations[f]++)

  for (let i = 0; i < days; i++) {
    updatePopulations(populations)
  }

  return populations.reduce((acc, v) => acc + v, 0)
}
