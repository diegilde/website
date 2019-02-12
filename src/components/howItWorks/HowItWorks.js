import React from "react"
import Step from './Step';
import "./HowItWorks.css"
import bigTriangleDivider from '../../images/big-triangle-divider.svg';

function Steps() {
   return (
     <>
         <div>
             <Step
               number={1}
               title="Personal mentoring & workshops"
               description="Find your professional mentor or join a peer-hosted workshop to learn a new skill."
             />
             <Step
               number={2}
               title="Get valuable answers"
               description="Ask your guild and receive valuable answers from other experts in your field."
             />
             <Step
               number={3}
               title="Curated relevant content"
               description="Peer-curated content suggestions help you focus on what really move you forward."
             />
             <Step
               number={4}
               title="Help others progress"
               description="Engage in your guild by offering mentoring, content, workshops or answering questions."
             />
         </div>
     </>
   )
}

const HowItWorks = () => (
  <div className="howItWorks">
    <div className="content">
        <h1>How it works</h1>
        <div className="desktop">
          <Steps />
        </div>
        <div className="mobile">
          <Steps />
        </div>
    </div>
    <img src={bigTriangleDivider} className="divider" alt="divider" />
  </div>
)

export default HowItWorks
