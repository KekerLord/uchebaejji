import React, { useState } from 'react'
import MultipleTest from './MultipleTest'
import SimpleTest from './SimpleTest'
import VijenerTest from './VijenerTest'

const App = () => {
  const [algorythm, setAlgorythm] = useState('multiple')

  return (
    <div className="container">
      <nav>
        <button onClick={() => setAlgorythm('multiple')}>Многоконтурный</button>
        <button onClick={() => setAlgorythm('simple')}>Простая подстановка</button>
        <button onClick={() => setAlgorythm('vijener')}>Виженер</button>
      </nav>

      {algorythm === 'multiple' && <MultipleTest />}
      {algorythm === 'simple' && <SimpleTest />}
      {algorythm === 'vijener' && <VijenerTest />}
    </div>
  )
}

export default App
