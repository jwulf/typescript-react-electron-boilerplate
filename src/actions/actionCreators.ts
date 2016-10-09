import { IVisibilityFilter } from 'types/state'
import { actionCreator } from 'utils/actions'

export const addTodo = actionCreator<{id: number, text: string}>('ADD_TODO')
export const toggleTodo = actionCreator<{index: number}>('TOGGLE_TODO')
export const setVisibilityFilter = actionCreator<{filter: IVisibilityFilter}>('SET_VISIBILITY_FILTER')
