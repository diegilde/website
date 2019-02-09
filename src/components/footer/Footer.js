import React from "react"
import "./Footer.css"
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="footer">
    © {new Date().getFullYear()}, Die Gilde | <Link to="/imprint">Imprint</Link> | <a href="mailto:team@jointheguild.online">Contact</a>
  </footer>
)

export default Footer
