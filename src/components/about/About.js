import React from "react"
import "./About.css"

function Content() {
  return (
    <>
      <h1>About</h1>
      <div>
        <p>The Guild’s mission is to give agency to millions of professionals around the world by re-defining what professional development means for blue & white collar workers in the 21st century.</p>
        <p>To achieve this mission, we require support and feedback from a wider audience of visionaries, technologists, economists, policymakers and other change makers who are capable of shaping the Future of Work with us.</p>
      </div>
      <div>
        <p></p>
        <p id='contactus'> If you are interested in contributing to The Guild's mission, please get in touch.</p>
      </div>
    </>
  )
}

const About = () => (
  <div className="about">
    <div className="content">
      <div className="desktop">
        <Content />
      </div>
      <div className="mobile">
        <Content />
      </div>
    </div>
  </div>
)

export default About
