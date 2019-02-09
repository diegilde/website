import React from "react"
import mobileLogo from '../images/the-guild-mobile.svg';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const LegalNotice = () => (
  <Layout>
    <SEO title="Legal Notice | The Guild" keywords={['legal-notice']} />
      <Link to="/"><img src={mobileLogo} style={{ margin: '3rem 0'}} alt="The Guild Logo" /></Link>
      <h1>Legal Notice</h1>
      <p>Legal stuff in here.</p>
      <Link to="/">Go back to our homepage</Link>
  </Layout>
)

export default LegalNotice
