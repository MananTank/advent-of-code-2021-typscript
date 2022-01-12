type Command = ['forward' | 'down' | 'up', number]

export function linesToCommands (inputLines: string[]) {
  return inputLines.map(line => {
    const [dir, amount] = line.split(' ');
    return [dir, Number(amount)]
  }) as Command[]
}
