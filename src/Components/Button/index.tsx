//@ts-nocheck

import PropTypes from 'prop-types'
import './Button.css'

interface IButtonProps {
  alt?: string
  text?: string
  backgroundColor?: string
  value?: boolean
  color?: string
  onClick?: () => void
}

export const ButtonNew = ({
  type,
  backgroundColor,
  value = 12,
  color,
  text = 'check your modal',
  ...props
}: IButtonProps) => {
  const toggle = value ? 'button_part' : 'button_part_two'

  const styles = ['button', toggle].join(' ')

  return (
    <button
      type="button"
      className={styles}
      style={{}}
      color={color}
      {...props}
    >
      {text}
    </button>
  )
}

ButtonNew.propTypes = {
  type: PropTypes.string,
  backgroundColor: PropTypes.string,
  isAdmin: PropTypes.bool,
  text: PropTypes.string,
  color: PropTypes.string,
}

export default ButtonNew
