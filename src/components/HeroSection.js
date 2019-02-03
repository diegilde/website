import React from "react"
import SignupForm from './form/SignupForm';
import mobileLogo from "../images/the-guild-mobile.svg"
import "./HeroSection.css"

const HeroSection = () => (
  <div className="heroSection">
    <img src={mobileLogo} alt="The Guild Logo" />
    <h2>Be excellent with each other</h2>
    <p>The Guild empowers people to make progress in their career - through the support of their professional guild and independent from their employer.</p>
    <SignupForm />
  </div>
)

export default HeroSection
