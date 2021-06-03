import React, { useMemo, useState } from 'react'
import Homophonic from '../lib/homophonic'

const HomophonicTest = () => {
  const homophonic = new Homophonic()

  const [encodeMode, setEncodeMode] = useState(true)
  const [input, setInput] = useState('')

  const result = useMemo(() =>
    encodeMode ? homophonic.encode(input) :
      homophonic.decode(input)
    , [input, encodeMode])

  const toggleMode = () => {
    setEncodeMode(!encodeMode)
  }

  const clear = () => {
    setInput('')
  }

  return (
    <div className="widget">
      <div className="input-group"><div><button id="toggle-mode" onClick={() => toggleMode()}>Режим</button></div><div>
        <label>{encodeMode ? 'Исходный текст' : 'Зашифрованный текст'}
          <input type="text" id="input" value={input} onChange={(event) => setInput(event.target.value)} />
        </label></div>
        <div>
          <label>Результат
        <input type="text" id="result" readOnly value={result} />
          </label>
        </div>
        <div><button id="clear" onClick={() => clear()}>Очистить</button></div>
      </div>
    </div>
  )
}

export default HomophonicTest
