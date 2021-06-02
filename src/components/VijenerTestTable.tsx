import React, { useEffect, useState } from 'react'
import Vijener from '../lib/vijener'

const VijenerTestTable = ({ vijener }: { vijener: Vijener }) => {
  const [alphabet, setAlphabet] = useState([])

  useEffect(() => {
    setAlphabet(vijener.alphabet.split(''));
  }, [vijener])

  return (
    <table>
      <tbody>
        {alphabet.map((_char, i) =>
          <tr key={i}>
            {alphabet.map((_char, j) =>
              <td key={i + j}>
                {alphabet[(i + j) % alphabet.length]}
              </td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default VijenerTestTable
