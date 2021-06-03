export default class Homophonic {
  static readonly alphabet: string = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя,.<>/?[]{}_-+=!~`@#$%^&*()|\' "0123456789'
  static readonly keyTable = ['ÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹ',
    'ĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤ',
    'ȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬ']

  private counters = new Array(Homophonic.alphabet.length).fill(0)

  encode(raw: string): string {
    let result = ''

    const keyTable = Homophonic.keyTable;
    const alphabet = Homophonic.alphabet;

    result = raw.split('').map((char) => {
      const foundIndex = alphabet.indexOf(char)
      if (foundIndex >= 0) {
        const encodedChar = keyTable[this.counters[foundIndex] % keyTable.length].charAt(foundIndex)
        this.counters[foundIndex]++
        return encodedChar
      }
    }).join('')

    return result
  }

  decode(code: string): string {
    let result = ''

    const keyTable = Homophonic.keyTable;
    const alphabet = Homophonic.alphabet;

    result = code.split('').map((char) => {
      for (const key of keyTable) {
        if (key.indexOf(char) >= 0) {
          const foundIndex = key.indexOf(char)
          return alphabet.charAt(foundIndex)
        }
      }
    }).join('')

    return result
  }
}