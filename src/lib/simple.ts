export default class Simple {
  encode(raw: string, key: number[], dim: { width: number, height: number }) {
    let result = ''
    const maxI = Math.ceil(raw.length / (dim.width * dim.height))

    for (let i = 0; i < maxI; ++i)
      for (let j = 0; j < dim.width; ++j)
        for (let k = 0; k < dim.height; ++k) {
          const index = i * dim.width * dim.height + k * dim.width + key[j]
          result += raw[index] || '_'
        }

    return result;
  }

  decode(code: string, key: number[], dim: { width: number, height: number }) {
    let result = ''
    const maxI = Math.ceil(code.length / (dim.width * dim.height))

    const inversedDim = { width: dim.height, height: dim.width }

    const inversedKey = key.map((value) => key[value])
    console.log('key', key);
    console.log('inversedKey', inversedKey);

    for (let i = 0; i < maxI; ++i)
      for (let k = 0; k < inversedDim.width; ++k)
        for (let j = 0; j < inversedDim.height; ++j) {
          const index = i * inversedDim.width * inversedDim.height + inversedKey[j] * inversedDim.width + k
          const char = code[index]
          result += char === '_' ? '' : char || ''
        }

    return result;
  }
}
