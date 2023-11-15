import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const ScrollerIcon = () => {
  return (
    <div className='scroller-icon'>
        <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
    </div>
  )
}

export default ScrollerIcon