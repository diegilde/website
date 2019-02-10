import React from "react"
import SignupForm from '../form/SignupForm';
import mobileLogo from "../../images/the-guild-mobile.svg"
import desktopLogo from "../../images/the-guild-desktop.svg"
import "./HeroSection.css"
import BackgroundImage from './BackgroundImage';

function Content() {
  return (
    <>
      <h2>Be excellent with each other</h2>
      <p>The Guild empowers people to make progress in their career - through the support of their professional guild and independent from their employer.</p>
    </>
  )
}

const HeroSection = () => (
  <BackgroundImage className="heroSection">
    <div className="content">
      <div className="mobile">
        <img src={mobileLogo} alt="The Guild Logo" />
        <Content />
        <SignupForm />
      </div>
      <div className="desktop flex">
        <div>
          <img src={desktopLogo} alt="The Guild Logo" />
          <Content />
        </div>
        <div>
          <SignupForm />
        </div>
      </div>
    </div>
  </BackgroundImage>
)

export default HeroSection
