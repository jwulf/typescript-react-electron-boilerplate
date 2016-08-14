import { createStore } from 'redux'
import todoApp from './reducers/main.ts'
import { addTodo, toggleTodo, setVisibilityFilter } from './actions/actionCreators.ts'

let store = createStore(todoApp)

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(addTodo({text: 'Learn about actions'}))
store.dispatch(addTodo({text: 'Learn about reducers'}))
store.dispatch(addTodo({text: 'Learn about store'}))
store.dispatch(toggleTodo({index: 0}))
store.dispatch(toggleTodo({index: 1}))
store.dispatch(setVisibilityFilter({filter: 'SHOW_COMPLETED'}))

// Stop listening to state updates
unsubscribe()