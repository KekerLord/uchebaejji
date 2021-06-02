export default class Xor {
  run(input: string, key: string) {
    let encoded = '';
    for (let i = 0; i < input.length; ++i)
      encoded += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(i % key.length))
    return encoded;
  }
}