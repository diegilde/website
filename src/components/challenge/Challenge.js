import React from "react"
import Image from './Image';
import "./Challenge.css"

const Challenge = () => (
  <div className="challenge">
    <div className="content">
      <div className="mobile">
        <Image />
        <h3>For most of us learning and developing is a crucial part of feeling satisfied in our jobs.</h3>
        <p>But for many of us professional development has become a source of stress and frustration:<br />
          We are scared of falling behind while in most professions we receive little to no support from our employers.</p>
      </div>
      <div className="desktop flex">
        <div>
          <Image />
        </div>
        <div>
          <h3>For most of us learning and developing is a crucial part of feeling satisfied in our jobs.</h3>
          <p>But for many of us professional development has become a source of stress and frustration:</p>
          <ul>
            <li>Increasing pressure to constantly improve creates a fear of falling behind</li>
            <li>Most professions receive little to no support from employers, feeling isolated and on their own</li>
            <li>Development opportunities within organisations are often limited and highly competitive</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Challenge
