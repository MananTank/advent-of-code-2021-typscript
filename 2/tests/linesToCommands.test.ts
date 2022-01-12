import { linesToCommands } from '../utils/linesToCommands';

test('linesToCommands', () => {
  const commands = linesToCommands(['forward 1', 'down 2', 'up 10']);
  expect(commands).toEqual([
    ['forward', 1],
    ['down', 2],
    ['up', 10]
  ])
})
