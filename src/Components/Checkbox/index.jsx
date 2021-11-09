import React from 'react'
import { PropTypes } from 'prop-types'

const Checkboxing = ({ label, onChange, isChecked, id }) => {
  return (
    <div>
      <p>First a wall</p>
      <h1 style={{ color: 'red' }}>StoryBook</h1>
      <label htmlFor={id}>
        <input
          type="checkbox"
          onChange={(e) => onChange(e.target.checked)}
          checked={isChecked}
          id={id}
        />
        <span>{label}</span>
      </label>
    </div>
  )
}

Checkboxing.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool,
  id: PropTypes.string,
}

Checkboxing.defaultProps = {
  label: '',
  onChange: undefined,
  isChecked: true,
  id: undefined,
}

export default Checkboxing
