import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// reducer
import reducer from './config/reducer'

// components
import SetSprite from './components/set-sprite'
import Grid from './components/grid'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <SetSprite />

        <Grid />
      </div>
    </Provider>
  )
}

render(
  <App />,
  document.querySelector('#container')
)
