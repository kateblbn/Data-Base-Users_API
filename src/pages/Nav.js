import React from 'react'
import { NavLink } from 'react-router-dom'
import './main.css'


function Nav() {
  return (
    <div className='nav'>
        <NavLink className='nav__home' to={`/`}>HOME</NavLink>
    </div>
  )
}

export default Nav