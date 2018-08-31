import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// components
import Cell from './cell'

const StyledGrid = styled.div`
  display: ${props => props.player ? 'flex' : 'none'};
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 150px;
`

const mapStateToProps = state => {
  return {
    cells: state.cells,
    player: state.player
  }
}

const Grid = props => {
  return (
    <StyledGrid player={props.player}>
      { props.cells.map((cell, i) => (
        <Cell
          key={i}
          id={i}
          value={cell}
        />
      ))}
    </StyledGrid>
  )
}

export default connect(mapStateToProps)(Grid)
