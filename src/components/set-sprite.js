import React from 'react'

// styles
import '../styles/set-sprite.scss'

const SetSprite = props => (
  <div className={!props.sprite ? 'set-sprite' : 'hide-set-sprite'}>
    <input onClick={props.setSprite} type='button' value='X' />
    <input onClick={props.setSprite} type='button' value='0' />
  </div>
)

export default SetSprite
