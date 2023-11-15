import React from 'react'
import "../assets/css/style.css"
import logo from "../assets/images/Blanco_logo-03.png"

const Header = () => {
  return (
    <header className='header'>
        <img src={logo} />
        <nav>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>WORKS</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header