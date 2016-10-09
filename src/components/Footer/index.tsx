import * as React from 'react' // tslint:disable-line:no-unused-variable
import FilterLink from 'containers/FilterLink'
const styles = require('./styles.css')

const Footer = () => (
  <p className={styles.text}>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer
