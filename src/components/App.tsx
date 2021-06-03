import React, { useState } from 'react'
import ComplexTest from './ComplexTest'
import HomophonicTest from './HomophonicTest'
import MultipleTest from './MultipleTest'
import SimpleTest from './SimpleTest'
import VijenerTest from './VijenerTest'
import XorTest from './XorTest'


const App = () => {
  const [algorythm, setAlgorythm] = useState('homophonic')

  return (
    <div className="container">
      <nav>
        <button className={`${algorythm == 'homophonic' && 'selected'}`} onClick={() => setAlgorythm('homophonic')}>Монофонический</button>
        <button className={`${algorythm == 'multiple' && 'selected'}`} onClick={() => setAlgorythm('multiple')}>Многоконтурный</button>
        <button className={`${algorythm == 'simple' && 'selected'}`} onClick={() => setAlgorythm('simple')}>Простая подстановка</button>
        <button className={`${algorythm == 'complex' && 'selected'}`} onClick={() => setAlgorythm('complex')}>Сложная подстановка</button>
        <button className={`${algorythm == 'xor' && 'selected'}`} onClick={() => setAlgorythm('xor')}>XOR</button>
        <button className={`${algorythm == 'vijener' && 'selected'}`} onClick={() => setAlgorythm('vijener')}>Виженер</button>
      </nav>

      {algorythm === 'homophonic' && <HomophonicTest />}
      {algorythm === 'multiple' && <MultipleTest />}
      {algorythm === 'simple' && <SimpleTest />}
      {algorythm === 'complex' && <ComplexTest />}
      {algorythm === 'xor' && <XorTest />}
      {algorythm === 'vijener' && <VijenerTest />}
    </div>
  )
}

export default App
