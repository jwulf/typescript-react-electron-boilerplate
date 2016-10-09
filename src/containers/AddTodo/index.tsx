import * as React from 'react'
import { connect } from 'react-redux'
import { IState } from 'types/state'
import { addTodo } from 'actions/actionCreators'
const styles = require('./styles.css')

const mapStateToProps = (state: IState): {nextTodoId: number} => {
    return {
        nextTodoId: state.nextTodoId
    }
}

interface AddTodoProps {
    dispatch: Function
    nextTodoId: number
}

let AddTodo: React.StatelessComponent<AddTodoProps> = ({ dispatch, nextTodoId }) => {
  let input: any

  return (
    <div className={styles.container}>
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
        <button type="submit" className={styles.button}>
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect(
  mapStateToProps
)(AddTodo)
