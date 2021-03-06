import React from "react"
import Benefit from './Benefit';
import theGuild from "../../images/the-guild.svg"
import bigTriangleDivider from "../../images/big-triangle-divider.svg"
import "./TheGuild.css"
import BackgroundImage from './BackgroundImage'

function Benefits() {
    return (
      <>
          <Benefit
            title=<span>Free career<br />development</span>
            description="Get free support from your professional peers that will help you advance your career."
          />
          <Benefit
            title=<span>Reliable professional<br />community</span>
            description="Join your guild and find your 'professional home’ - reliable, trustworthy and independent from your employer. "
          />
          <Benefit
            title=<span>Rewarding<br />engagement</span>
            description="Benefit financially from the impact you have in the guild through a unique ownership model (coming soon)."
         />
      </>
    )
}

const TheGuild = () => (
  <BackgroundImage className="theGuild">
    <img src={bigTriangleDivider} className="divider" alt="divider" />
    <div className="content">
        <h1>The Guild supports your career development outside your organisation.</h1>
        <p>We incubate and host professional guilds on our platform. Each guild provides peer-2-peer career development for their members - independent from their employer, free and accessible to a wide range of professions.</p>
        <img className="illustration" src={theGuild} alt="What is The Guild illustration" />
        <div className="desktop flex">
          <Benefits />
        </div>
        <div className="mobile">
          <Benefits />
        </div>
    </div>
    <div className="bg" />
  </BackgroundImage>
)

export default TheGuild
