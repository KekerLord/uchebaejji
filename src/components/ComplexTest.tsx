import React, { useEffect, useState } from 'react'
import Complex from '../lib/complex'
import CommonTestTable from './CommonTestTable'

const ComplexTest = () => {
    const complex = new Complex()

    const [keyList, setKeyList] = useState([])
    const [spacesKeyList, setSpacesKeyList] = useState([])

    const [encodeMode, setEncodeMode] = useState(true)
    const [input, setInput] = useState('')
    const [key, setKey] = useState('')
    const [spacesKey, setSpacesKey] = useState('')
    const [result, setResult] = useState('')
    const [width, setWidth] = useState(4)
    const [height, setHeight] = useState(3)

    useEffect(() => {
        setKeyList(key.trim().split(' ').map((word) => Number(word)))
        setSpacesKeyList(spacesKey.trim().split(' ').map((word) => Number(word)))
    }, [key, spacesKey])

    const toggleMode = () => {
        setEncodeMode(!encodeMode)
    }

    const clear = () => {
        setInput('')
        setKey('')
        setSpacesKey('')
        setResult('')
    }

    const run = (runEncodeMode: boolean) => {
        console.log('Run');
        console.log('Complex:', complex);

        let result;

        if (runEncodeMode) result = complex.encode(input, keyList, spacesKeyList, { width, height })
        else result = complex.decode(input, keyList, spacesKeyList, { width, height })

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
                    <label>Ключ пробелов
        <input type="text" id="spaces-key" value={spacesKey} onChange={(event) => setSpacesKey(event.target.value)} />
                    </label>
                </div>
                <div>
                    <div>Размеры таблицы</div>
                    <label>
                        ширина
        <input type="number" id="width" min={1} value={width} onChange={(event) => setWidth(Number(event.target.value))} />
                    </label>
                    <label>
                        высота
        <input type="number" id="height" min={1} value={height} onChange={(event) => setHeight(Number(event.target.value))} />
                    </label>
                </div>
                <div>
                    <label>Результат
        <input type="text" id="result" readOnly value={result} />
                    </label>
                </div>
                <div><button id="run" type="submit" onClick={() => run(encodeMode)}>{encodeMode ? 'Зашифровать' : 'Расшифровать'}</button></div>
                <div><button id="clear" onClick={() => clear()}>Очистить</button></div>
            </div>
            {encodeMode && <CommonTestTable input={spacesKey && Complex.addSpaces(input, spacesKeyList, { width, height })} dim={{ width, height }} />}
        </div>
    )
}

export default ComplexTest
