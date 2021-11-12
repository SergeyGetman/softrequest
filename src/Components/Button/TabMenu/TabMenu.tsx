import React, { useState } from 'react'

import './Tabmenu.css'

type Iarr = {
  text: string
  type: string
  backgroundColor: string
  title: string
  content: string
  isActive: boolean
  onClick: () => void
  setIsActive: () => void
}

const Accordion = ({ title, content }: Iarr) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
      <div className="accordion">Accordion</div>
    </div>
  )
}

export default Accordion
