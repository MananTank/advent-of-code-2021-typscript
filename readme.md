# Advent of Code 2021 (TypeScript) 🎅🎄👨‍💻

Solutions For https://adventofcode.com/2021/ in TypeScript

* Easy to read code with comments
* Clear explanation of how it works
* Unit tests

<br/>

## 🎅 Setup

```bash
npm i
```

<br/>

## 🎄 Running code with input file

* import the solution you want to run in index.ts
* give the path of input file relative to root folder

Example

```typescript
// index.ts
import { part1 } from './1/part1'

const answer = part1('1/inputs/puzzle.txt')
console.log(answer)
```

And then run the following command

```bash
npm run code
```

<br/>

## 🧪 Run Unit Tests

### Run all Unit Tests

```bash
npm run test
```

### Run specific test

Example

```bash
npm run test -- 1/tests/parts.test.ts
```
