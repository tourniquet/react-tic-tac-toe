import React from 'react'
// components
import Cell from './cell'
// styles
import '../styles/grid.scss'

const Grid = props => (
  <div className={props.sprite ? 'grid' : 'hide-grid'}>
    { props.cells.map((cell, i) => (
      <Cell
        key={i}
        id={i}
        value={cell}
        setPlayer={props.setPlayer}
      />
    ))
    }
  </div>
)

export default Grid
