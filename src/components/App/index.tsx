import * as React from 'react' // tslint:disable-line:no-unused-variable
import Footer from 'components/Footer'
import AddTodo from 'containers/AddTodo'
import VisibleTodoList from 'containers/VisibleTodoList'
const styles = require('./styles.css')

const App = () => (
  <div className={styles.container}>
    <Footer />
    <AddTodo />
    <VisibleTodoList />
  </div>
)

export default App
