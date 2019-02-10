import React from "react"
import "./Footer.css"
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="footer">
    <div className="content">
      <div className="desktop">
        © {new Date().getFullYear()}, The Guild | <Link to="/legal-notice">Legal Notice</Link> | <a href="mailto:team@jointheguild.online">Contact</a>
      </div>
      <div className="mobile">
        © {new Date().getFullYear()}, The Guild<br />
        <Link to="/legal-notice">Legal Notice</Link> | <a href="mailto:team@jointheguild.online">Contact</a>
      </div>
    </div>
  </footer>
)

export default Footer
