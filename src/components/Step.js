import React from "react"
import PropTypes from 'prop-types';
import "./Step.css"

const Step = ({ number, title, description }) => (
  <div className="step">
    <div className="numberCircle">{number}</div>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
)

Step.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Step
