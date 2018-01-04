import React from 'react'
import { render } from 'react-dom'
// components
import Grid from './components/grid'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      cells: []
    }

    this.drawArray = this.drawArray.bind(this)
  }

  drawArray (rows) {
    return Array(rows).fill(0)
  }

  componentDidMount () {
    this.setState({
      cells: this.drawArray(9)
    })
  }

  render () {
    return (
      <div>
        <Grid cells={this.state.cells} />
      </div>
    )
  }
}

render(
  <App />,
  document.querySelector('#container')
)
