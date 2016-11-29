import { Store } from 'redux'
import * as React from 'react' // tslint:disable-line:no-unused-variable
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from 'reducers/main'
import App from 'components/App'

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
  module.hot.accept('./components/App', function () {
    let NextApp = require('./components/App').default
    render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      rootEl
    )
  })
}
