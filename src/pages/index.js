import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/heroSection/HeroSection';
import Challenge from '../components/challenge/Challenge';
import TheGuild from '../components/theGuild/TheGuild';
import Professions from '../components/professions/Professions';
import HowItWorks from '../components/howItWorks/HowItWorks';
import Organisations from '../components/organisations/Organisations';
import About from '../components/about/About';

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
