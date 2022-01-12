import { readLines } from '../utils/readlines';
import { linesToCommands } from './utils/linesToCommands';

export function part2 (fileName: string) {
  const inputLines = readLines(fileName);
  const commands = linesToCommands(inputLines)

  let position = 0;
  let depth = 0;
  let aim = 0;

  commands.forEach(command => {
    const [direction, amount] = command;
    if (direction === 'forward') {
      position += amount;
      depth += aim * amount;
    } else if (direction === 'up') {
      aim -= amount;
    } else if (direction === 'down') {
      aim += amount;
    }
  });

  return position * depth
}
