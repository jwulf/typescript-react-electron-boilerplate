import { IAction } from '../types/actions.ts'
import { ITodo } from '../types/state.ts'
import { isType } from '../utils/actions.ts'
import { addTodo, toggleTodo } from '../actions/actionCreators.ts'

function todos(todos: ITodo[], action: IAction<any>): ITodo[] {
    if (isType(action, addTodo)) {

        return [
            ...todos,
            {
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            }
        ]


    }

    if (isType(action, toggleTodo)) {

        return todos.map((todo: ITodo, index: number): ITodo => {
                if (index === action.payload.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            }
        )

    }

    return todos
}

export default todos