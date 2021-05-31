import React, { useState } from 'react'
import MultipleTest from './MultipleTest'
import VijenerTest from './VijenerTest'

const App = () => {
  const [algorythm, setAlgorythm] = useState('vijener')

  return (
    <div className="container">
      <nav>
        <button onClick={() => setAlgorythm('vijener')}>Виженер</button>
        <button onClick={() => setAlgorythm('multiple')}>Многоконтурный</button>
        <button onClick={() => setAlgorythm('simple')}>Простая подстановка</button>
      </nav>

      {algorythm === 'vijener' && <VijenerTest />}
      {algorythm === 'multiple' && <MultipleTest />}
    </div>
  )
}

export default App
