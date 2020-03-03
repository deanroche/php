import React from "react"
import { graphql, StaticQuery } from "gatsby" // navigate

import Navigation from "./navigation"
import styled from "styled-components"
// Components

const Header = ({ dark }) => (
  <StaticQuery
    query={graphql`
      {
        contentfulFooterSection {
          internalName
          logo {
            title
            description
            fluid(quality: 100) {
              src
              srcSet
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    `}
    render={data => (
      <Section>
        <Navigation logo={data.contentfulFooterSection.logo} dark={dark} />
      </Section>
    )}
  />
)

const Section = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`
export default Header
