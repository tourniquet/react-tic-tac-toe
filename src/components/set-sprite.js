import React from 'react'
import { connect } from 'react-redux'

// styles
import '../styles/set-sprite.scss'

const mapStateToProps = state => {
  return { player: state.player }
}

const SetSprite = props => {
  const setSprite = el => {
    const player = el.target.value
    const ai = player === '0' ? 'X' : '0'

    return {
      type: 'SET_SPRITE',
      player,
      ai
    }
  }

  return (
    <div className={props.player ? 'hide-set-player' : 'set-player'}>
      <input
        onClick={el => props.dispatch(setSprite(el))}
        type='button'
        value='X'
      />
      <input
        onClick={el => props.dispatch(setSprite(el))}
        type='button'
        value='0'
      />
    </div>
  )
}

export default connect(mapStateToProps)(SetSprite)
