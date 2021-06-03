import Simple from "./simple";

export default class Complex {
  private readonly simple = new Simple()

  static addSpaces(raw: string, spacesKey: number[], dim: { width: number, height: number }) {
    let maxI = Math.ceil(raw.length / (dim.width * dim.height))

    raw += ' '.repeat(maxI * dim.width * dim.height - raw.length)

    maxI = Math.ceil((raw.length + dim.height * maxI) / (dim.width * dim.height))

    const rawList = raw.split('')

    for (let i = 0; i < maxI; ++i)
      for (let k = 0; k < dim.height; ++k) {
        const index = i * dim.width * dim.height + k * dim.width + spacesKey[k]
        console.log({ i, k, index });

        rawList.splice(index, 0, ' ')
      }

    return rawList.join('')
  }

  static removeSpaces(spaced: string, spacesKey: number[], dim: { width: number, height: number }) {
    const spacedList = spaced.split('')

    const maxI = Math.ceil(spaced.length / (dim.width * dim.height))

    for (let i = 0; i < maxI; ++i)
      for (let k = 0; k < dim.height; ++k) {
        const index = i * dim.width * dim.height + k * dim.width + spacesKey[k]
        spacedList.splice(index, 1, '')
      }

    return spacedList.join('')
  }

  encode(raw: string, key: number[], spacesKey: number[], dim: { width: number, height: number }) {
    const spacedRaw = Complex.addSpaces(raw, spacesKey, dim)

    return this.simple.encode(spacedRaw, key, dim);
  }


  decode(code: string, key: number[], spacesKey: number[], dim: { width: number, height: number }) {
    const spacedRaw = this.simple.decode(code, key, dim)

    return Complex.removeSpaces(spacedRaw, spacesKey, dim).trim();
  }
}

/*
п+ер  1
+еда  0
ю +п  2
р+ив  1
+ет   0
из+   2
М+ос  1
+квы  0
!_+_  2????


всйцсвцйс йцвсцй сцй вс йцс  йсц в

*/