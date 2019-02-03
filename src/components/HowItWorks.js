import React from "react"
import Step from './Step';
import "./HowItWorks.css"

const HowItWorks = () => (
  <div className="howItWorks">
    <h1>How it works</h1>
    <Step
      number={1}
      title="Personal mentoring & workshops"
      description="Find your professional mentor or join a peer-hosted workshop to learn a new skill."
    />
    <Step
      number={2}
      title="Get valuable answers"
      description="Struggling with a specific challenge or question? Ask your guild and receive valuable answers from other experts in your field."
    />
    <Step
      number={3}
      title="Curated relevant content"
      description="Peer-curated and -rated content suggestions help you spend your time only on those blog posts and links that can really move you forward."
    />
    <Step
      number={4}
      title="Help others progress"
      description="Engage in your guild and support others in their development by offering mentoring, content, workshops or answering questions."
    />
  </div>
)

export default HowItWorks
