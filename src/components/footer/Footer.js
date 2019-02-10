import React from "react"
import "./Footer.css"
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="footer">
    <div className="content">
      <div className="desktop">
        © {new Date().getFullYear()}, The Guild | <Link to="/legal-notice">Legal Notice</Link> | <Link to="/privacy-policy">Privacy Policy</Link> | <a href="mailto:team@jointheguild.online">Contact</a>
      </div>
      <div className="mobile">
        <p>© {new Date().getFullYear()}, The Guild</p>
        <p><Link to="/legal-notice">Legal Notice</Link></p>
        <p><Link to="/privacy-policy">Privacy Policy</Link></p>
        <p><a href="mailto:team@jointheguild.online">Contact</a></p>
      </div>
    </div>
  </footer>
)

export default Footer
