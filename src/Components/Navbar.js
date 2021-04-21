import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="nav-center"  >
        <Link to="/" >
          <img src={logo} alt="logo_image" className="logo" />
        </Link>
        <ul className="nav-links">
          <li> <Link to="/"> Home </Link> </li>
          <li> <Link to="/about"> About </Link> </li>
          <li> <Link to="/error"> Error Page </Link> </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
