import { IAction } from '../types/actions.ts'
import { isType } from '../utils/actions.ts'
import { addTodo } from '../actions/actionCreators.ts'

export default function nextTodoId(nextTodoId: number, action: IAction<any>): number {
    if (isType(action, addTodo)) {
        nextTodoId++
    }

    return nextTodoId
}