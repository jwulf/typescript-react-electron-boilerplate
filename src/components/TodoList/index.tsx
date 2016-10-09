import * as React from 'react'
import { ITodo } from 'types/state'
import Todo from 'components/Todo'

interface TodoListProps {
    todos: ITodo[]
    onTodoClick: (id: number) => void
}

const TodoList: React.StatelessComponent<TodoListProps> = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

export default TodoList
