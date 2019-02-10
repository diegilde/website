import React from "react"
import "./Organisations.css"
import Image from './Image';

const Organisations = () => (
  <div className="organisations">
    <div className="content">
        <h1>For organisations</h1>
        <div className="mobile">
            <h3>Guilds provide a better, easier and cheaper way to develop talent.</h3>
            <Image />
            <p>Through a convenient monthly subscription, organisations can outsource their professional development programs into the guilds. THE GUILD shares this revenue through a unique ownership model with the members of the guilds (coming soon).</p>
            <p>Guilds allow organisations of all sizes to provide ’state of the art’ talent development that requires no internal resources, facilitate expert careers that can overcome ‘pyramid bottlenecks’, recruit faster and more sustainable.</p>
            <p><a href="mailto:team@jointheguild.online">Contact us!</a></p>
        </div>
        <div className="desktop flex">
            <div>
                <h3>Guilds provide a better, easier and cheaper way to develop talent.</h3>
                <p>Through a convenient monthly subscription, organisations can outsource their professional development programs into the guilds. THE GUILD shares this revenue through a unique ownership model with the members of the guilds (coming soon).</p>
                <p>Guilds allow organisations of all sizes to provide ’state of the art’ talent development that requires no internal resources, facilitate expert careers that can overcome ‘pyramid bottlenecks’, recruit faster and more sustainable.</p>
                <p><a href="mailto:team@jointheguild.online">Contact us!</a></p>
            </div>
            <div>
                <Image />
            </div>
        </div>
    </div>
  </div>
)

export default Organisations
