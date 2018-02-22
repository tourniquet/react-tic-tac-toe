import React from 'react'
import { connect } from 'react-redux'

// components
import Cell from './cell'

// styles
import '../styles/grid.scss'

const mapStateToProps = state => {
  return { cells: state.cells }
}

const Grid = props => {
  return (
    <div className={props.sprite ? 'grid' : 'hide-grid'}>
      { props.cells.map((cell, i) => (
        <Cell
          key={i}
          id={i}
          value={cell}
          setPlayer={props.setPlayer}
        />
      ))
      }
    </div>
  )
}

export default connect(mapStateToProps)(Grid)
