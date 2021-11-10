//@ts-nocheck

import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

interface ButtonProps {
  text?: string
  backgroundColor?: string
  value?: boolean
  color?: string
  onClick?: () => void
}

export const ButtonNew = ({
  text,
  backgroundColor,
  value,
  color,
  ...props
}: ButtonProps) => {
  const toggle = value ? 'button_part' : 'button_part_two'

  const styles = ['button', toggle].join(' ')

  return (
    <button
      type="button"
      className={styles}
      style={{ backgroundColor }}
      color={color}
      {...props}
    >
      {text}
    </button>
  )
}

ButtonNew.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  isAdmin: PropTypes.bool,
  color: PropTypes.string,
}

export default ButtonNew
