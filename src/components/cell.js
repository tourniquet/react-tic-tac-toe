import React from 'react'
// styles
import '../styles/cell.css'

const Cell = props => (
  <div
    id={props.id}
    className='cell'>
    {props.value}
  </div>
)

export default Cell
