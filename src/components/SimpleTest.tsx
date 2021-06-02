import React, { useState } from 'react'
import Simple from '../lib/simple';

const SimpleTest = () => {
  const simple = new Simple();

  const [encodeMode, setEncodeMode] = useState(true)
  const [input, setInput] = useState('')
  const [key, setKey] = useState('')
  const [result, setResult] = useState('')
  const [width, setWidth] = useState(4)
  const [height, setHeight] = useState(3)

  const toggleMode = () => {
    setEncodeMode(!encodeMode)
  }

  const clear = () => {
    setInput('')
    setKey('')
    setResult('')
  }

  const run = (runEncodeMode: boolean) => {
    console.log('Run');
    console.log('Simple:', simple);

    let result;

    const keyList = key.trim().split(' ').map((word) => Number(word))

    if (runEncodeMode) result = simple.encode(input, keyList, { width, height })
    else result = simple.decode(input, keyList, { width, height })

    setResult(result)
    console.log(result);
  }

  return (
    <div className="widget">
      <div className="input-group"><div><button id="toggle-mode" onClick={() => toggleMode()}>Режим</button></div><div>
        <label>Исходный текст
          <input type="text" id="input" value={input} onChange={(event) => setInput(event.target.value)} />
        </label></div>
        <div>
          <label>Ключ
        <input type="text" id="key" value={key} onChange={(event) => setKey(event.target.value)} />
          </label>
        </div>
        <div>
          <div>Размеры таблицы</div>
          <label>
            ширина
        <input type="number" id="key" min={1} value={width} onChange={(event) => setWidth(Number(event.target.value))} />
          </label>
          <label>
            высота
        <input type="number" id="key" min={1} value={height} onChange={(event) => setHeight(Number(event.target.value))} />
          </label>
        </div>
        <div>
          <label>Результат
        <input type="text" id="result" value={result} onChange={(event) => setResult(event.target.value)} />
          </label>
        </div>
        <div><button id="run" onClick={() => run(encodeMode)}>{encodeMode ? 'Зашифровать' : 'Расшифровать'}</button></div>
        <div><button id="clear" onClick={() => clear()}>Очистить</button></div>
      </div>
    </div>
  )
}

export default SimpleTest
