import * as React from 'react'

interface LinkProps {
    active?: boolean
    children?: any
    onClick?: () => void
    filter: string
}

const Link: React.StatelessComponent<LinkProps>  = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
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