import React from 'react'
// styles
import '../styles/cell.scss'

/**
 * @param {object} props
 */
const Cell = props => {
  // change this function name
  const setPlayer = el => {
    const cells = props.cells

    if (!cells[el.target.id]) {
      cells[el.target.id] = this.state.sprite
      return cells
    }

    // if this.state.player == 5, finish the game
    const player = this.state.player + 1
    this.setState({ player })

    this.checkMatch()
    // if player set up to four sprites, AI can set sprite
    if (player <= 4) this.ai()
  }

  return (
    <div
      id={props.id}
      className='cell'
      onClick={el => props.dispatch(setPlayer(el))}
    >
      {props.value}
    </div>
  )
}

export default Cell
