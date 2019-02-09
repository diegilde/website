import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import mobileLogo from '../images/the-guild-mobile.svg';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found | The Guild" />
    <Link to="/"><img src={mobileLogo} style={{ margin: '3rem 0'}} alt="The Guild Logo" /></Link>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Go back to our homepage</Link>
  </Layout>
)

export default NotFoundPage
