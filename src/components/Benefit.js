import React from "react"
import PropTypes from 'prop-types';
import logo from '../images/the-guild-logo.svg';
import "./Benefit.css"

const Benefit = ({ title, description }) => (
  <div className="benefit">
    <img src={logo} alt="The Guild Logo" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
)

Benefit.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Benefit
