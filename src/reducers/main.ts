import { IAction } from 'types/actions'
import { IState } from 'types/state'

import todos from 'reducers/todos'
import visibilityFilter from 'reducers/visibilityFilter'
import nextTodoId from 'reducers/nextTodoId'

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
