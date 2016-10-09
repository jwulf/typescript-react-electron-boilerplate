import { IAction } from 'types/actions'
import { isType } from 'utils/actions'
import { addTodo } from 'actions/actionCreators'

export default function nextTodoId(nextTodoId: number, action: IAction<any>): number {
    if (isType(action, addTodo)) {
        nextTodoId++
    }

    return nextTodoId
}
