import Simple from "./src/lib/simple";

const simple = new Simple

const raw = '0123456789AB'
const encoded = simple.encode(raw, [3, 0, 2, 1], { width: 4, height: 3 })
const decoded = simple.decode(encoded, [3, 0, 2, 1], { width: 4, height: 3 })

console.log(raw);
console.log(encoded);
console.log(decoded);
