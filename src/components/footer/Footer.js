import React from "react"
import "./Footer.css"

const Footer = () => (
  <footer className="footer">
    © {new Date().getFullYear()}, Die Gilde | Imprint | <a href="mailto:team@jointheguild.online">Contact</a>
  </footer>
)

export default Footer
