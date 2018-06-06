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
    const {
      ai,
      cells,
      gameState
    } = props

    let cell
    // return a number from 0 up to 8
    const randNum = () => { cell = Math.floor(Math.random() * 9) }
    randNum()

    /**
     * while cell on board is set already,
     * function randNum is called untill find a empty cell
     * I know, it's not a smart solution, but it works :)
     */
    while (cells[cell]) randNum()
    cells[cell] = ai

    // while gameState is less than 5, there is no reason to check for a match
    if (gameState >= 5) checkMatch()
  }

  const checkMatch = () => {
    const {
      cells,
      gameState,
      player
    } = props

    // check rows
    for (let i = 0; i < cells.length; i += 3) {
      if (`${cells[i]}${cells[i + 1]}${cells[i + 2]}` === 'OOO' ||
        `${cells[i]}${cells[i + 1]}${cells[i + 2]}` === 'XXX') {
        window.location.reload()
      }
    }

    // check columns
    if ((cells[0] === cells[3] && cells[3] === cells[6] && cells[0] === player) ||
    (cells[1] === cells[4] && cells[4] === cells[7] && cells[1] === player) ||
    (cells[2] === cells[5] && cells[5] === cells[8] && cells[2] === player)) {
      window.location.reload()
    }

    // check diagonals
    if ((cells[0] === cells[4] && cells[4] === cells[8] && cells[0] === player) ||
    (cells[2] === cells[4] && cells[4] === cells[6] && cells[2] === player)) {
      window.location.reload()
    }

    // if gameState === 8 and there is no any matches,
    // the game must be restarted because of draw
    if (gameState === 8) window.location.reload()
  }

  /**
   * @param {object} el
   */
  const drawPlayerSprite = el => {
    const {
      cells,
      gameState,
      player
    } = props

    if (!cells[el.target.id]) {
      cells[el.target.id] = player

      // while gameState is less than 5, there is no reason to check for a match
      if (gameState >= 5) checkMatch()

      // after that user put his "sprite" on grid, call ai() function,
      // but only if gameState is lower than 8, otherwise, ai() will try to
      // find an empty cell
      if (gameState < 8) ai()

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
      onClick={el => props.dispatch(drawPlayerSprite(el))}
    >
      {props.value}
    </div>
  )
}

export default connect(mapStateToProps)(Cell)
