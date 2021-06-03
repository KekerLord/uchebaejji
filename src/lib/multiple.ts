import Vijener from "./vijener";

export default class Multiple {
  vijener: Vijener;

  constructor(abc?: string) {
    this.vijener = new Vijener(abc)
  }

  encode(raw: string, keys: string[]): string {
    let result = ''

    const words = raw.split(' ')

    return words.map((word, index) => {
      return this.vijener.encode(word, keys[index % keys.length])
    }).join(' ')
  }

  decode(code: string, keys: string[]): string {
    let result = ''

    const words = code.split(' ')

    return words.map((word, index) => {
      return this.vijener.decode(word, keys[index % keys.length])
    }).join(' ')
  }
}