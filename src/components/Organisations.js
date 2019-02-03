import React from "react"
import "./Organisations.css"

const Organisations = () => (
  <div className="organisations">
    {/*placeholder for picture*/}
    <div style={{
      width: '100%',
      maxWidth: '350px',
      height: '250px',
      background: '#eee',
      margin: '20px auto'
    }} />
    <h1>For organisations</h1>
    <h4>Guilds provide a better, easier and cheaper way to develop talent.</h4>
    <p>Through a convenient monthly subscription, organisations can outsource their professional development programs into the guilds. THE GUILD shares this revenue through a unique ownership model with the members of the guilds (coming soon).</p>
    <p>Guilds allow organisations of all sizes to provide ’state of the art’ talent development that requires no internal resources, facilitate expert careers that can overcome ‘pyramid bottlenecks’, recruit faster and more sustainable.</p>
    <p><a href="mailto:team@die-gilde.online">Contact us!</a></p>
  </div>
)

export default Organisations
