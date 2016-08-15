import * as React from 'react'
import { connect } from 'react-redux'
import { IState } from '../types/state'
import { addTodo } from '../actions/actionCreators'

const mapStateToProps = (state: IState): {nextTodoId: number} => {
    return {
        nextTodoId: state.nextTodoId
    }
}

interface AddTodoProps {
    dispatch?: Function
    nextTodoId?: number
}

let AddTodo: React.StatelessComponent<AddTodoProps> = ({ dispatch, nextTodoId }) => {
  let input: any

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
            return
        }
        dispatch(addTodo({id: nextTodoId, text: input.value}))
        input.value = ''
        }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo = connect(
    mapStateToProps
)(AddTodo)

export default AddTodo