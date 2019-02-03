import React from "react"
import PropTypes from 'prop-types';
import "./Input.css"

function getClassname(isErrorPresent) {
  return isErrorPresent ? 'input error' : 'input';
}

function Input({ type, name, placeholder, value, onChange, onFocus, errorMessage }) {
    return (
      <div className={getClassname(!!errorMessage)}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          onFocus={onFocus}
        />
        <p className="errorBlock"><small>{errorMessage}</small></p>
      </div>
    )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  onFocus: PropTypes.func,
  errorMessage: PropTypes.string
}

Input.defaultProps = {
  type: 'text',
  onFocus: () => {},
  errorMessage: '',
  value: ''
}

export default Input
