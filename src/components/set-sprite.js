import React from 'react'
import { connect } from 'react-redux'

// styles
import '../styles/set-sprite.scss'

const mapStateToProps = state => {
  return { sprite: state.sprite }
}

const SetSprite = props => {
  console.log(props)

  const setSprite = el => {
    const player = el.target.value
    const ai = player === '0' ? 'X' : '0'

    console.log(props)

    return {
      type: 'SET_SPRITE',
      player,
      ai
    }
  }

  return (
    <div className={props.sprite ? 'hide-set-sprite' : 'set-sprite'}>
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
