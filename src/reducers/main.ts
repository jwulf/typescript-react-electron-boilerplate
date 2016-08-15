import { IAction } from '../types/actions'
import { IState } from '../types/state'

import todos from './todos'
import visibilityFilter from './visibilityFilter'
import nextTodoId from './nextTodoId'

const initialState: IState = {
    visibilityFilter: 'SHOW_ALL',
    todos: [],
    nextTodoId: 0
}

// Do not use combineReducers in order to enforce type correctness (combineReducers can return {})
export default function todoApp(state: IState = initialState, action: IAction<any>): IState {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action),
        nextTodoId: nextTodoId(state.nextTodoId, action)
    }
}