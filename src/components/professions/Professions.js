import React from "react"
import executiveAssistants from '../../images/executive-assistants.svg'
import socialSupportWorkers from '../../images/social-support-workers.svg'
import productManagers from '../../images/product-managers.svg'
import nutritionExperts from '../../images/nutrition-experts.svg'
import dataScientists from '../../images/data-scientists.svg'
import "./Professions.css"

const Professions = () => (
  <div className="professions">
    <div className="content">
      <h1>Join your guild</h1>
      <p>The Guild is currently focusing on these five professions. If your profession is not one of them, let us know by selecting “Other” in the signup form. We will get in touch with you as soon as we are ready to launch.</p>
      <div className="profession">
        <img src={executiveAssistants} alt="Executive Assistants" />
        <p>Executive Assistants</p>
      </div>
      <div className="profession">
        <img src={socialSupportWorkers} alt="Social Support Workers" />
        <p>Social Support Workers</p>
      </div>
      <div className="profession">
        <img src={productManagers} alt="Product Managers" />
        <p>Product Managers</p>
      </div>
      <div className="profession">
        <img src={nutritionExperts} alt="Nutrition Experts" />
        <p>Nutrition Experts</p>
      </div>
      <div className="profession">
        <img src={dataScientists} alt="Data Scientists" />
        <p>Data Scientists</p>
      </div>
    </div>
  </div>
)

export default Professions
