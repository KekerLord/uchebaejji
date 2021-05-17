export default class Vijener {
  alphabet: string = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя,.<>/?[]{}_-+=!~`@#$%^&*()|\' "0123456789'

  constructor(abc?: string) {
    if (abc) {
      this.alphabet = abc
    }
  }

  encode(raw: string, key: string): string {
    let result = ''

    console.log("Raw: ", raw);
    const indexesRaw = raw.split("").map((char) => this.findCharIndex(this.alphabet, char))
    console.log("Raw indexes: ", indexesRaw);

    console.log("Key: ", key);
    const indexesKey = key.split("").map((char) => this.findCharIndex(this.alphabet, char))
    console.log("Key indexes: ", indexesRaw);

    for (let i = 0; i < raw.length; i++) {
      const resultIndex = (indexesRaw[i] + indexesKey[i % key.length]) % this.alphabet.length
      result += this.alphabet.charAt(resultIndex)
    }

    console.log(result)

    return result
  }

  decode(code: string, key: string): string {
    let result = ''

    console.log("Code: ", code);
    const indexesCode = code.split("").map((char) => this.findCharIndex(this.alphabet, char))
    console.log("Code indexes: ", indexesCode);

    console.log("Key: ", key);
    const indexesKey = key.split("").map((char) => this.findCharIndex(this.alphabet, char))
    console.log("Key indexes: ", indexesCode);

    for (let i = 0; i < code.length; i++) {
      const resultIndex = (indexesCode[i] + this.alphabet.length - indexesKey[i % key.length]) % this.alphabet.length
      result += this.alphabet.charAt(resultIndex)
    }

    console.log(result)

    return result
  }

  private findCharIndex(alphabet: string, char: string): number | null {
    let index = null

    index = alphabet.indexOf(char)

    return index < 0 ? null : index
  }
}