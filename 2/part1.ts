import { readLines } from '../utils/readlines';
import { linesToCommands } from './utils/linesToCommands';

export function part1 (fileName: string) {
  const inputLines = readLines(fileName);
  const commands = linesToCommands(inputLines)

  // horizontal position and depth starts at zero
  let position = 0;
  let depth = 0;

  commands.forEach(command => {
    const [direction, amount] = command;
    if (direction === 'forward') {
      position += amount;
    } else if (direction === 'up') {
      depth -= amount;
    } else if (direction === 'down') {
      depth += amount;
    }
  });

  return position * depth
}
