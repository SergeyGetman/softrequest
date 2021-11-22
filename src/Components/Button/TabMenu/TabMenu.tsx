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

const Accordion: React.FunctionComponent<Iarr> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
      <div className="accordion"></div>
    </div>
  )
}

export default Accordion
