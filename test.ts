import Complex from "./src/lib/complex"
import Homophonic from "./src/lib/homophonic"

const complex = new Complex()

const input = 'Я Паша, а не Па-Паша!12345'
const key = [1, 3, 0, 2]
const spacesKey = [2, 0, 1]
const dim = { width: 4, height: 3 }
const encoded = complex.encode(input, key, spacesKey, dim)
const decoded = complex.decode(encoded, key, spacesKey, dim)

console.log({ input, encoded, decoded });