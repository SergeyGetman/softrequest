//@ts-nocheck

import React, { useEffect } from 'react'
import cl from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.myModal]
  if (visible) {
    rootClasses.push(cl.active)
  }
  console.log(visible)

  return (
    <div className={rootClasses.join(' ')}>
      <div className={cl.myModalContent}>
        <div className={cl.close} onClick={() => setVisible(!visible)}></div>
        {children}
        <p>будь в тренде новостей с мира IT</p>
      </div>
    </div>
  )
}

export default MyModal
