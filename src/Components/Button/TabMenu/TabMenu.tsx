//@ts-nocheck

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Tabmenu.css'

const arr = ['First', 'Second', 'Third']

const ActiveTab = () => {
  const [count, setCount] = useState(0)

  const clickHandler = (id) => {
    console.log(id)
  }

  return (
    <div className="wrapper">
      <ul className="tabs">
        {arr.map((str, idx) => {
          return (
            <li key={str} onClick={() => clickHandler(idx)}>
              {str}
            </li>
          )
        })}
      </ul>
      <div className="contents">Вы кликнули {count} раз</div>
      <button onClick={() => setCount(count + 1)} type="button">
        кликнуть
      </button>
    </div>
  )
}

export default ActiveTab
