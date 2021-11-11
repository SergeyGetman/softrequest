//@ts-nocheck

import React, { useState } from 'react'
import { accordionData } from './TabContetnt'
import PropTypes from 'prop-types'
import './Tabmenu.css'

const arr = ['First', 'Second', 'Third']

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  )
}

export default Accordion
