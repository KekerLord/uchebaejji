import React from 'react'

const CommonTestTable = ({ input, dim }: { input: string, dim: { width: number, height: number } }) => {
  const messageTables = []
  const maxI = Math.ceil(input.length / (dim.width * dim.height))

  for (let i = 0; i < maxI; ++i) {
    const table = []
    for (let j = 0; j < dim.height; ++j) {
      const row = []
      for (let k = 0; k < dim.width; ++k) {
        const index = i * dim.width * dim.height + j * dim.width + k
        row.push(input[index] || '_')
      }
      table.push(row)
    }
    messageTables.push(table)
  }

  return (
    <table>
      <tbody>
        {messageTables.map((table, i) => table.map((row, j) =>
          <tr key={j}>
            {row.map((char, k) =>
              <td key={i + j + k}>
                {char}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CommonTestTable
