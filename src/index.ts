import { existsSync, readFileSync, statSync } from 'fs'
import { basename } from 'path'

import CP437 from './cp437'

const command = basename(process.argv[1])

if (process.argv.length < 3) {
  console.error(`Usage: ${command} input_file`)
  process.exit(-1)
}

const file = process.argv[2]
if (!existsSync(file)) {
  console.error(`'${file}' does not exist.`)
  process.exit(-1)
}

if (!statSync(file).isFile()) {
  console.error(`'${file}' is not a file.`)
  process.exit(-1)
}

let data: number[]
try {
  const fileLength = statSync(file).size
  data = new Array(fileLength)
  const buffer = readFileSync(file)

  const arrayBuffer =
    buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength)

  const dataVIew = new DataView(arrayBuffer)
  for (let i = 0; i < fileLength; i++) {
    data[i] = dataVIew.getUint8(i)
  }
} catch (ex) {
  console.error(`${ex}`)
  console.error('\nCould not read file.')
  process.exit(-1)
}

const converted = data
  .map((x) => CP437[x])
  .reduce((acc, v) => [...acc, ...v], [])

process.stdout.write(Uint8Array.from(converted))

process.exit(0)
