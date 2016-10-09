import * as React from 'react'
const styles = require('./styles.css')

interface LinkProps {
    active: boolean
    children: any
    onClick: () => void
}

const Link: React.StatelessComponent<LinkProps>  = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       className={styles.text}
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

export default Link
