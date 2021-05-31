import Vijener from "./vijener";

export default class Multiple {
  vijener: Vijener;

  constructor(abc?: string) {
    this.vijener = new Vijener(abc)
  }

  encode(raw: string, keys: string[]): string {
    let result = ''

    console.log("Raw: ", raw);

    console.log("Keys: ", keys);

    const words = raw.split(' ')
    console.log("Words: ", words)

    const encodedWords = words.map((word, index) => {
      return this.vijener.encode(word, keys[index % keys.length])
    })

    result = encodedWords.join(' ')

    console.log(result)

    return result
  }

  decode(code: string, keys: string[]): string {
    let result = ''

    console.log("Code: ", code)

    console.log("Keys: ", keys)

    const words = code.split(' ')
    console.log("Words: ", words);

    const decodedWords = words.map((word, index) => {
      return this.vijener.decode(word, keys[index % keys.length])
    })

    result = decodedWords.join(' ')

    console.log(result)

    return result
  }
}