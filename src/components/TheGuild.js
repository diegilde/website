import React from "react"
import Benefit from './Benefit';
import "./TheGuild.css"

const TheGuild = () => (
  <div className="theGuild">
    <h1>The Guild supports your career development outside your organisation.</h1>
    <p>We incubate and host professional guilds on our platform. Each guild provides peer-2-peer career development for their members - independent from their employer, free and accessible to a wide range of professions.</p>
    {/*placeholder for picture*/}
    <div style={{
      width: '100%',
      maxWidth: '350px',
      height: '250px',
      background: 'white',
      margin: '20px auto'
    }} />
    <Benefit
      title="Free career development"
      description="Get free support from your professional peers that will help you advance your career."
    />
    <Benefit
      title="Reliable professional community"
      description="Join your guild and find your 'professional home’ - reliable, trustworthy and independent from your employer. "
    />
    <Benefit
      title="Rewarding engagement"
      description="Benefit financially from the impact you have in the guild through a unique ownership model."
    />
  </div>
)

export default TheGuild
