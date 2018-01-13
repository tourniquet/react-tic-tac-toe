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
      sprite: null
    }

    this.drawArray = this.drawArray.bind(this)
    this.setSprite = this.setSprite.bind(this)
    this.setX = this.setX.bind(this)
  }

  drawArray (rows) {
    return Array(rows).fill(null)
  }

  setSprite (el) {
    const sprite = el.target.value

    this.setState({
      sprite
    })
  }

  setX (el) {
    const cells = this.state.cells

    if (!cells[el.target.id]) {
      cells[el.target.id] = this.state.sprite
      this.setState({ cells })
    }
  }

  componentDidMount () {
    this.setState({
      cells: this.drawArray(9)
    })
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
          setX={this.setX}
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
