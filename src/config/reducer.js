import initialState from './initialState'

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
    default:
      return state
  }
}

export default reducer
