import { IVisibilityFilter, ITodo, IState } from 'types/state'
import { connect } from 'react-redux'
import { toggleTodo } from 'actions/actionCreators'
import TodoList from 'components/TodoList'

const getVisibleTodos = (todos: ITodo[], filter: IVisibilityFilter): ITodo[] => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state: IState): {todos: ITodo[]} => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch: Function): {onTodoClick: (id: number) => void} => {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo({index: id}))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
