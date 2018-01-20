import React from 'react'
// styles
import '../styles/cell.scss'

const Cell = props => (
  <div
    id={props.id}
    className='cell'
    onClick={props.setPlayer}
  >
    {props.value}
  </div>
)

export default Cell
