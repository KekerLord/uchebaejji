const run = (input, key) => {
  let encoded = '';
  for (let i = 0; i < raw.length; ++i)
    encoded += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(i % key.length))
  return encoded;
}

const raw = 'Я не Алёша, а ты?'
const key = ''

const encoded = run(raw, key)
const decoded = run(encoded, key)

console.log({ raw, key, encoded, decoded });
