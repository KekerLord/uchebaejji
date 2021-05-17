import Vijener from './vijener'

const main = () => {
  console.log('main');

  const toggleButton = document.getElementById('toggle-mode')
  const runButton = document.getElementById('run')
  const clearButton = document.getElementById('clear')

  const encodeBlock = document.querySelector('.encode')
  const decodeBlock = document.querySelector('.decode')

  const fromInput = <HTMLInputElement>document.getElementById('from')
  const keyInput = <HTMLInputElement>document.getElementById('key')
  const resultInput = <HTMLInputElement>document.getElementById('result')

  let mode = 'encode'
  let vijener = new Vijener()

  const updateDisplay = () => {
    if (mode == 'encode') {
      encodeBlock.classList.remove('hidden')
      decodeBlock.classList.add('hidden')
    }
    else {
      encodeBlock.classList.add('hidden')
      decodeBlock.classList.remove('hidden')
    }
  }

  const toggleMode = () => {
    mode = mode === 'encode' ? 'decode' : 'encode'
  }

  const run = () => {
    console.log('Run');
    console.log('Vijener:', vijener);

    const from = fromInput.value
    const key = keyInput.value

    const result = mode === 'encode' ? vijener.encode(from, key) : vijener.decode(from, key)
    console.log(result);
    resultInput.value = result
  }

  const clear = () => {
    fromInput.value = ""
    keyInput.value = ""
    resultInput.value = ""
  }

  const generateTable = () => {
    const table = document.createElement('table')
    const tbody = document.createElement('tbody')

    for (let i = 0; i < vijener.alphabet.length; ++i) {
      const tr = document.createElement('tr')

      for (let j = 0; j < vijener.alphabet.length; ++j) {
        const td = document.createElement('td')
        td.innerHTML = vijener.alphabet[(j + i) % vijener.alphabet.length]
        tr.appendChild(td)
      }
      tbody.appendChild(tr)
    }

    table.appendChild(tbody)
    const container = document.querySelector('.container')
    container.appendChild(table)
  }

  updateDisplay()
  generateTable()

  toggleButton.addEventListener('click', (event) => {
    event.preventDefault()
    toggleMode()
    updateDisplay()
  })

  runButton.addEventListener('click', (event) => {
    event.preventDefault()
    console.log("Run0");

    run()
  })

  clearButton.addEventListener('click', (event) => {
    clear()
  })
}

window.addEventListener('DOMContentLoaded', () => main())