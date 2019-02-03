import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/HeroSection';
import Challenge from '../components/Challenge';
import TheGuild from '../components/TheGuild';
import Professions from '../components/Professions';
import HowItWorks from '../components/HowItWorks';
import Organisations from '../components/Organisations';
import About from '../components/About';

const IndexPage = () => (
  <Layout>
    <SEO title="The Guild" keywords={['the-guild', 'die-gilde']} />
    <HeroSection />
    <Challenge />
    <TheGuild />
    <Professions />
    <HowItWorks />
    <Organisations />
    <About />
  </Layout>
)

export default IndexPage
