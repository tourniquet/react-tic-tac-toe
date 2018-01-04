import React from 'react'
// components
import Cell from './cell'
// styles
import '../styles/grid.css'

const Grid = props => (
  <div className='grid'>
    { props.cells.map((cell, i) => (
      <Cell
        key={i}
        id={i}
        value={cell}
      />
    ))
    }
  </div>
)

export default Grid
