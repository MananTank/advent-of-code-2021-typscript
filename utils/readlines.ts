import fs from 'fs'
import { EOL } from 'os'
import path from 'path'

export function readLines(filePath: string) {
  const absolutePath = path.join(__dirname, `../${filePath}`)
  return fs.readFileSync(absolutePath, 'utf8').split(EOL)
}
