import * as React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers/main'
import App from './components/App'

const { AppContainer } = require('react-hot-loader')
declare var module: { hot: any }
const rootEl = document.getElementById('root')

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default

    render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>,
      rootEl
    )
  })
}