import React from 'react'
import { Link} from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2>BOOK KEEPING WEBSITE</h2>
        <ul className='navbar-menu'>
        <li>
          <Link  to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/bookForm'>
            Add Book
          </Link>
        </li>
        <li>
          <Link to='/books'>
            Books
          </Link>
        </li>
            
        </ul>
       
    </div>
  )
}

export default Navbar