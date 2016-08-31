import * as React from 'react' // tslint:disable-line:no-unused-variable
import { render } from 'react-dom'
import { Store } from '@types/redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers/main'
import App from './components/App'

declare var module: { hot: any }
declare var window: { devToolsExtension: any }

// RENDER

const rootEl = document.getElementById('root')

let store: Store<any>
if (__DEV__) {
  store = createStore(todoApp, window.devToolsExtension && window.devToolsExtension())
} else {
  console.log('PROD')
  store = createStore(todoApp)
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
)

// HMR

if (module.hot) {
  const { AppContainer } = require('react-hot-loader')

  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default // tslint:disable-line:no-unused-variable

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