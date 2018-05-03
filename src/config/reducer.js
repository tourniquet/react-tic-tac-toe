import initialState from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SPRITE':
      return Object.assign({}, state, {
        player: action.player,
        ai: action.ai
      })
    case 'DRAW_SPRITE':
      return Object.assign({}, state, {
        cells: [...action.cells],
        gameState: ++state.gameState
      })
    default:
      return state
  }
}

export default reducer
