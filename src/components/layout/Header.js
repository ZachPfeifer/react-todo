import React from 'react';
import { Link } from 'react-router-dom'


//Functional Component
function Header() {
  return (
    <header
      // @ts-ignore
      style={headerStyle}>
      <h1>Todo List</h1>
      <span>

        <Link style={linkStyle} to="/"> Home </Link>
        ||
        <Link style={linkStyle} to="/about"> About </Link>
      </span>

    </header>
  )
}

//CSS
const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}
const linkStyle = {
  color: '#fff'

}

export default Header