import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// components
import SetSprite from './components/set-sprite'
import Grid from './components/grid'

const initialState = {
  cells: [],
  sprite: null,
  ai: null,
  player: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DRAW_GRID':
      return Object.assign({}, state, {
        cells: Array(9).fill(null)
      })
    case 'SET_SPRITE':
      return Object.assign({}, state, {
        player: action.player,
        ai: action.ai
      })
    case 'SET_PLAYER':
    default:
      return state
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// draw 3x3 grid
const drawGrid = () => {
  return {
    type: 'DRAW_GRID',
    cells: Array(9).fill(null)
  }
}

const ai = () => {
  const cells = this.state.cells
  let cell

  const randNum = () => { cell = Math.floor(Math.random() * 9) }
  randNum()

  while (cells[cell]) randNum()

  cells[cell] = this.state.ai

  this.setState({ cells })
}

const checkMatch = () => {
  const cells = this.state.cells
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

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <SetSprite />

        <Grid />
      </div>
    </Provider>
  )
}

render(
  <App />,
  document.querySelector('#container')
)
