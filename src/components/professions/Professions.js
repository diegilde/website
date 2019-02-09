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
