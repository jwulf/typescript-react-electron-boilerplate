import * as React from 'react'
const styles = require('./styles.css')

interface TodoProps {
    onClick: () => void
    completed: boolean
    text: string
}

const Todo: React.StatelessComponent<TodoProps>  = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    className={styles.todoItem}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo