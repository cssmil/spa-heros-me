import React from 'react'
import { NavLink, Link } from 'react-router-dom'


export const NavBar = () => {
  return (
    <nav className='container navbar'>
      <li>
        <Link to="/">Home</Link>
      </li>
      <div className='navbar__items'>
        <div>
          <li><NavLink to="/marvel"> Marvel </NavLink></li>
          <li><NavLink to="/dc-comics"> DC-Comics </NavLink></li>
          <li><NavLink to="/Search"> Search</NavLink></li>
        </div>
        <span>
          <div>Johnson</div>
          <li><Link to="/Login" role="button" >Logout</Link></li>
        </span>
      </div>
    </nav>
  )
}
