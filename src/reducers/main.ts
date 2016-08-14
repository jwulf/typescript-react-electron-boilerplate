import { Action } from '../types/actions.ts'
import { State } from '../types/state.ts'

import todos from './todos.ts'
import visibilityFilter from './visibilityFilter'

const initialState: State = {
    visibilityFilter: 'SHOW_ALL',
    todos: []
}

// Do not use combineReducers in order to enforce type correctness (combineReducers can return {})
export default function todoApp(state: State = initialState, action: Action<any>): State {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
}