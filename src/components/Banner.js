import React from 'react'
import "../assets/css/style.css"
import logo from "../assets/images/Blanco_logo-03.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner-content'>
            <h2 className='banner-subtitle'>donde el arte encuentra la tecnología</h2>
            <img src={logo} className='banner-img' />
            {/* <h1 className='banner-title'>Valhalla</h1> */}
        </div>
        {/* <h2 className='slogan'>diseño innovador, maquetación vanguardista.</h2> */}
    </div>
  )
}

export default Banner