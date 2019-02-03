import React from "react"
import "./Challenge.css"

const Challenge = () => (
  <div className="challenge">
    {/*placeholder for picture*/}
    <div style={{
      width: '100%',
      maxWidth: '350px',
      height: '250px',
      background: '#eee',
      margin: '20px auto'
    }} />
    <h3>For most of us learning and developing is a crucial part of feeling satisfied in our jobs.</h3>
    <p>But for many of us professional development has become a source of stress and frustration:<br />
    We are scared of falling behind while in most professions we receive little to no support from our employers</p>
  </div>
)

export default Challenge
