import React from "react"
import { StaticQuery, graphql } from "gatsby"
import GatsbyBackgroundImage from 'gatsby-background-image'

const BackgroundImage = ({ children, className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "the-guild-background3.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2568) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <GatsbyBackgroundImage Tag="section"
           className={className}
           fluid={imageData}
           imgStyle={{ backgroundSize: 'auto 100%'}}
        >
          {children}
        </GatsbyBackgroundImage>
      )
    }}
  />
)

export default BackgroundImage
