import React from "react"
import { graphql } from "gatsby"

import SEO from "../SEO"
import GA from "../components/ga"
import Layout from "../components/layout"

import Hero from "../components/hero"
import About from "../components/about"
import Facility from "../components/facility"
import Services from "../components/services"
import Classes from "../components/classes"
import LatestPosts from "../components/latest-posts"
import Contact from "../components/contact"
import Membership from "../components/membership"
import Newsletter from "../components/newsletter"
import Instagram from "../components/instagram"
import "./scss/index.scss"

const index = ({ data }) => {
  let components = []
  const sections = data.contentfulHomePage.homePageSections

  sections.forEach((item, index) => {
    switch (item.type) {
      case "ContentfulHeroSection":
        components.push(<Hero key={index} data={sections[index]} />)
        break
      case "ContentfulAboutSection":
        components.push(<About key={index} data={sections[index]} />)
        break
      case "ContentfulFacilitySection":
        components.push(<Facility key={index} data={sections[index]} />)
        break
      case "ContentfulServicesSection":
        components.push(<Services key={index} data={sections[index]} />)
        break
      case "ContentfulClassesSection":
        components.push(<Classes key={index} data={sections[index]} />)
        break
      case "ContentfulBlogPostsSection":
        components.push(<LatestPosts key={index} data={sections[index]} />)
        break
      case "ContentfulContactSection":
        components.push(<Contact key={index} data={sections[index]} />)
        break
      case "ContentfulMembershipSection":
        components.push(<Membership key={index} data={sections[index]} />)
        break
      case "ContentfulNewsletterSection":
        components.push(<Newsletter key={index} data={sections[index]} />)
        break
    }
  })

  // {[...components]}

  return (
    <>
      <SEO
        title="PHP | Home"
        description="Precision Health Performance is a health and fitness facility based in Waterford City, Ireland"
      />
      <Layout>
        {" "}
        {components && components.map(component => component)}
        <Instagram />
      </Layout>
      <GA page="/home" />
    </>
  )
}

export const query = graphql`
  {
    contentfulHomePage {
      internalName
      seoTitle
      seoPageDescription
      homePageSections {
        ... on Node {
          type: __typename
          ... on ContentfulHeroSection {
            internalName
            title
            image {
              title
              description
              fluid(quality: 100) {
                src
                srcSet
                srcWebp
                srcSetWebp
              }
            }
            buttonLeftText
            buttonLeftLink
            buttonRightText
            buttonRightLink
            facebookLink
            twitterLink
            instagramLink
          }
          ... on ContentfulAboutSection {
            internalName
            title
            mainText {
              json
            }
            precisionTitle
            precisionText {
              precisionText
            }
            precisionImage {
              title
              description
              fluid {
                src
                srcSet
                srcWebp
                srcSetWebp
              }
            }
            healthTitle
            healthText {
              healthText
            }
            healthImage {
              title
              description
              fluid {
                src
                srcSet
                srcWebp
                srcSetWebp
              }
            }
            performanceTitle
            performanceText {
              performanceText
            }
            performanceImage {
              title
              description
              fluid {
                src
                srcSet
                srcWebp
                srcSetWebp
              }
            }
          }
          ... on ContentfulFacilitySection {
            internalName
            title
            mainText {
              mainText
            }
            images {
              title
              description
              fluid {
                src
                srcSet
                srcWebp
                srcSetWebp
              }
            }
          }
          ... on ContentfulServicesSection {
            internalName
            title
            mainText {
              mainText
            }
            mainServices {
              internalName
              title
              text {
                text
              }
              icon {
                title
                description
                fixed(width: 200, height: 200, quality: 75) {
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
            }
          }
          ... on ContentfulBlogPostsSection {
            internalName
            title
            posts {
              title
              description
              image {
                title
                description
                fixed(width: 500, height: 500, quality: 75) {
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
            }
          }
          ... on ContentfulClassesSection {
            internalName
            title
            mainText {
              mainText
            }
          }
          ... on ContentfulContactSection {
            internalName
            title
            mainText {
              mainText
            }
          }
          ... on ContentfulMembershipSection {
            internalName
            title
            image {
              title
              description
              fluid(quality: 75) {
                src
                srcSet
                srcWebp
                srcSetWebp
              }
            }
            membershipOptions {
              internalName
              title
              cost
              icon {
                title
                description
                fixed(width: 200, height: 200, quality: 75) {
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
            }
          }
          ... on ContentfulNewsletterSection {
            internalName
            title
            mainText {
              mainText
            }
          }
        }
      }
    }
  }
`

export default index
