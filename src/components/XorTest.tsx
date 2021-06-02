import React, { useMemo, useState } from 'react'
import Xor from '../lib/xor'

const XorTest = () => {
  const xor = new Xor()

  const [input, setInput] = useState('')
  const [key, setKey] = useState('')
  const result = useMemo(() => xor.run(input, key), [input, key])

  const clear = () => {
    setInput('')
    setKey('')
  }


  return (
    <div className="widget">
      <div className="input-group">
        <div>
          <label>Исходный текст
          <input type="text" id="input" value={input} onChange={(event) => setInput(event.target.value)} />
          </label>
        </div>
        <div>
          <label>Ключ
        <input type="text" id="key" value={key} onChange={(event) => setKey(event.target.value)} />
          </label>
        </div>
        <div>
          <label>Результат
        <input type="text" id="result" readOnly value={result} />
          </label>
        </div>
        <div><button id="clear" onClick={() => clear()}>Очистить</button></div>
      </div>

    </div >
  )
}

export default XorTest
