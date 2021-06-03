export default class Vijener {
  alphabet: string = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя,.<>/?[]{}_-+=!~`@#$%^&*()|\' "0123456789'

  constructor(abc?: string) {
    if (abc) {
      this.alphabet = abc
    }
  }

  encode(raw: string, key: string): string {
    let result = ''

    const indexesRaw = raw.split("").map((char) => this.findCharIndex(this.alphabet, char))
    const indexesKey = key.split("").map((char) => this.findCharIndex(this.alphabet, char))

    for (let i = 0; i < raw.length; i++) {
      const resultIndex = (indexesRaw[i] + indexesKey[i % key.length]) % this.alphabet.length
      result += this.alphabet.charAt(resultIndex)
    }

    return result
  }

  decode(code: string, key: string): string {
    let result = ''

    const indexesCode = code.split("").map((char) => this.findCharIndex(this.alphabet, char))
    const indexesKey = key.split("").map((char) => this.findCharIndex(this.alphabet, char))

    for (let i = 0; i < code.length; i++) {
      const resultIndex = (indexesCode[i] + this.alphabet.length - indexesKey[i % key.length]) % this.alphabet.length
      result += this.alphabet.charAt(resultIndex)
    }

    return result
  }

  private findCharIndex(alphabet: string, char: string): number | null {
    let index = null

    index = alphabet.indexOf(char)

    return index < 0 ? null : index
  }
}