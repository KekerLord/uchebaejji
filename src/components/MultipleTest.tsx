import React, { useState } from 'react'
import Multiple from '../lib/multiple';

const multipleTest = () => {
  const alphabet: string = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя,.<>/?[]{}_-+=!~`@#$%^&*()|\'"0123456789'

  const multiple = new Multiple(alphabet);

  const [encodeMode, setEncodeMode] = useState(true)
  const [input, setInput] = useState('')
  const [key1, setKey1] = useState('')
  const [key2, setKey2] = useState('')
  const [key3, setKey3] = useState('')
  const [result, setResult] = useState('')

  const toggleMode = () => {
    setEncodeMode(!encodeMode)
  }

  const run = (runEncodeMode: boolean) => {
    let result;

    if (runEncodeMode) result = multiple.encode(input, [key1, key2, key3])
    else result = multiple.decode(input, [key1, key2, key3])

    setResult(result)
  }

  const clear = () => {
    setInput('')
    setKey1('')
    setKey2('')
    setKey3('')
    setResult('')
  }

  return (
    <div className="widget">
      <div className="input-group">
        <div><button id="toggle-mode" onClick={() => toggleMode()}>Режим</button>
        </div>
        <div>
          <label>Исходный текст
          <input type="text" id="input" value={input} onChange={(event) => setInput(event.target.value)} />
          </label></div>
        <div>
          <label>Ключ 1
        <input type="text" id="key1" value={key1} onChange={(event) => setKey1(event.target.value)} />
          </label>
        </div><div>
          <label>Ключ 2
        <input type="text" id="key2" value={key2} onChange={(event) => setKey2(event.target.value)} />
          </label></div><div>
          <label>Ключ 3
        <input type="text" id="key3" value={key3} onChange={(event) => setKey3(event.target.value)} />
          </label></div>
        <div>
          <label>Результат
        <input type="text" id="result" readOnly value={result} />
          </label>
        </div>
        <div><button id="run" onClick={() => run(encodeMode)}>{encodeMode ? 'Зашифровать' : 'Расшифровать'}</button></div>
        <div><button id="clear" onClick={() => clear()}>Очистить</button></div>
      </div>
    </div>
  )
}

export default multipleTest

