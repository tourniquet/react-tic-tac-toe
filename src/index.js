import React from 'react'
import { render } from 'react-dom'
// components
import SetSprite from './components/set-sprite'
import Grid from './components/grid'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      cells: [],
      sprite: null,
      ai: null,
      player: 0
    }

    this.drawArray = this.drawArray.bind(this)
    this.setSprite = this.setSprite.bind(this)
    this.setPlayer = this.setPlayer.bind(this)
    this.ai = this.ai.bind(this)
    this.checkMatch = this.checkMatch.bind(this)
  }

  drawArray (rows) {
    return Array(rows).fill(null)
  }

  setSprite (el) {
    const sprite = el.target.value
    const ai = sprite === '0' ? 'X' : '0'

    this.setState({
      sprite,
      ai
    })
  }

  // change this function name
  setPlayer (el) {
    const cells = this.state.cells

    if (!cells[el.target.id]) {
      cells[el.target.id] = this.state.sprite
      this.setState({ cells })
    }

    // if this.state.player == 5, finish the game
    const player = this.state.player + 1
    this.setState({ player })

    this.checkMatch()
    // if player set up to four sprites, AI can set sprite
    if (player <= 4) this.ai()
  }

  ai () {
    const cells = this.state.cells
    let cell

    const randNum = () => { cell = Math.floor(Math.random() * 9) }
    randNum()

    while (cells[cell]) randNum()

    cells[cell] = this.state.ai

    this.setState({ cells })
  }

  checkMatch () {
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

  componentDidMount () {
    this.setState({ cells: this.drawArray(9) })
  }

  render () {
    return (
      <div>
        <SetSprite
          setSprite={this.setSprite}
          sprite={this.state.sprite}
        />

        <Grid
          cells={this.state.cells}
          setPlayer={this.setPlayer}
          sprite={this.state.sprite}
        />
      </div>
    )
  }
}

render(
  <App />,
  document.querySelector('#container')
)
