import React from 'react'
import { connect } from 'react-redux'
// styles
import '../styles/cell.scss'

const mapStateToProps = state => {
  return {
    gameState: state.gameState,
    cells: state.cells,
    player: state.player,
    ai: state.ai
  }
}

/**
 * @param {object} props
 */
const Cell = props => {
  const ai = () => {
    const cells = props.cells

    let cell
    const randNum = () => { cell = Math.floor(Math.random() * 9) }
    randNum()

    // while cell on board is set already,
    // function randNum is called untill find a empty cell
    while (cells[cell]) randNum()
    cells[cell] = props.ai

    return {
      type: 'DRAW_SPRITE',
      cells
    }
  }

  const checkMatch = () => {
    const cells = props.cells
    const sprite = this.state.sprite

    // check rows
    if ((cells[0] === cells[1] && cells[1] === cells[2] && cells[0] === sprite) ||
    (cells[3] === cells[4] && cells[4] === cells[5] && cells[3] === sprite) ||
    (cells[6] === cells[7] && cells[7] === cells[8] && cells[6] === sprite)) {
      window.location.reload()
    }

    // check columns
    if ((cells[0] === cells[3] && cells[3] === cells[6] && cells[0] === sprite) ||
    (cells[1] === cells[4] && cells[4] === cells[7] && cells[1] === sprite) ||
    (cells[2] === cells[5] && cells[5] === cells[8] && cells[2] === sprite)) {
      window.location.reload()
    }

    // check diagonals
    if ((cells[0] === cells[4] && cells[4] === cells[8] && cells[0] === sprite) ||
    (cells[2] === cells[4] && cells[4] === cells[6] && cells[2] === sprite)) {
      window.location.reload()
    }

    if (this.player === 5) window.location.reload()
  }

  /**
   * @param {object} el
   */
  const setSprite = el => {
    const cells = props.cells

    if (!cells[el.target.id]) {
      cells[el.target.id] = props.player

      // checkMatch()
      // if this.state.gameState == 5, finish the game
      // if player set up to four sprites, AI can set sprite
      if (props.gameState <= 4) {
        // console.log(props.gameState)
        ai()
      }

      return {
        type: 'DRAW_SPRITE',
        cells
      }
    }
  }

  return (
    <div
      id={props.id}
      className='cell'
      onClick={el => props.dispatch(setSprite(el))}
    >
      {props.value}
    </div>
  )
}

export default connect(mapStateToProps)(Cell)
