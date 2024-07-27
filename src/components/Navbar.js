import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2>BOOK KEEPING WEBSITE</h2>
        <ul className='navbar-menu'>
        <li>
          <NavLink  to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/bookForm'>
            Add Book
          </NavLink>
        </li>
        <li>
          <NavLink to='/books'>
            Books
          </NavLink>
        </li>
            
        </ul>
       
    </div>
  )
}

export default Navbar