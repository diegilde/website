import React from "react"
import PropTypes from 'prop-types';
import "./Select.css"

function getClassname(isErrorPresent) {
  return isErrorPresent ? 'select error' : 'select';
}

function getStyle(value) {
  return value ? {} : { color: '#bbbbbb' }
}

function Select({ options, name, placeholder, value, onChange, onFocus, errorMessage }) {
  return (
    <div className={getClassname(!!errorMessage)}>
      <select
        name={name}
        style={getStyle(value)}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
      <p className="errorBlock"><small>{errorMessage}</small></p>
    </div>
  )
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  onFocus: PropTypes.func,
  errorMessage: PropTypes.string
}

Select.defaultProps = {
  onFocus: () => {},
  errorMessage: '',
  value: ''
}

export default Select
