import { Action } from '../types/actions.ts'
import { Todo } from '../types/state.ts'
import { isType } from '../utils/actions.ts'
import { addTodo, toggleTodo } from '../actions/actionCreators.ts'

function todos(todos: Todo[], action: Action<any>): Todo[] {
    if (isType(action, addTodo)) {

        return [
            ...todos,
            {
                text: action.payload.text,
                completed: false
            }
        ]


    }

    if (isType(action, toggleTodo)) {

        return todos.map((todo: Todo, index: number): Todo => {
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