import React, { useState } from 'react'
import Vijener from '../lib/vijener';
import VijenerTestTable from './VijenerTestTable';

type Mode = 'encode' | 'decode'

const VijenerTest = () => {
  const vijener = new Vijener();

  const [mode, setMode]: [Mode, React.Dispatch<React.SetStateAction<Mode>>] = useState('encode')
  const [input, setInput] = useState('')
  const [key, setKey] = useState('')
  const [result, setResult] = useState('')

  const toggleMode = () => {
    setMode((mode === 'encode') ? 'decode' : 'encode')
  }

  const run = (runMode: 'encode' | 'decode') => {
    let result;

    if (runMode === 'encode') result = vijener.encode(input, key)
    else result = vijener.decode(input, key)

    setResult(result)
  }

  const clear = () => {
    setInput('')
    setKey('')
    setResult('')
  }

  return (
    <div className="widget">
      <div className="input-group"><div><button id="toggle-mode" onClick={() => toggleMode()}>Режим</button></div>
        <div><label>Исходный текст
          <input type="text" id="input" value={input} onChange={(event) => setInput(event.target.value)} />
        </label></div>

        <div><label>Ключ
        <input type="text" id="key" value={key} onChange={(event) => setKey(event.target.value)} />
        </label></div>

        <div><label>Результат
        <input type="text" id="result" readOnly value={result} />
        </label></div>

        <div><button id="run" onClick={() => run(mode)}>{mode === 'encode' ? 'Зашифровать' : 'Расшифровать'}</button></div>
        <div><button id="clear" onClick={() => clear()}>Очистить</button></div>

        <VijenerTestTable vijener={vijener} />
      </div>
    </div>
  )
}

export default VijenerTest

