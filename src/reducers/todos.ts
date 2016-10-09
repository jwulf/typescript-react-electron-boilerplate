import { IAction } from 'types/actions'
import { ITodo } from 'types/state'
import { isType } from 'utils/actions'
import { addTodo, toggleTodo } from 'actions/actionCreators'

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
