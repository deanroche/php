import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Hero from "../components/hero"
import InnerWrapper from "../components/innerWrapper"
import Layout from "../components/layout"
import SEO from "../SEO"
import styles from "./scss/privacy.module.scss"

const Accessibility = ({ company, siteUrl, email }) => {
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: { company, siteUrl, email },
        },
      }) => (
        <>
          <Layout dark={true}>
            <SEO title="PHP | Accessibility" />

            <InnerWrapper width={1024}>
              <article className={styles.privacy} id="accessibility">
                <h1>Accessibility Statment</h1>
                <p>
                  {company} is committed to facilitating the accessibility and
                  usability of its Web site, {siteUrl}, for all people with
                  disabilities. {company} has implemented and will continue to
                  implement the relevant portions of the World Wide Web
                  Consortium’s Web Content Accessibility Guidelines 2.1 Level AA
                  (WCAG 2.1 AA) or higher as its web accessibility standard.
                </p>
                <p>
                  Please be aware that our efforts are ongoing. If at any time
                  you have specific questions or concerns about the
                  accessibility of any web page on {siteUrl}, please contact us
                  at {email}. If you do encounter an accessibility issue, please
                  be sure to specify the web page in your email, and we will
                  make all reasonable efforts to make that page accessible for
                  you.
                </p>
              </article>
            </InnerWrapper>
          </Layout>
        </>
      )}
    />
  )
}

export default Accessibility

Accessibility.propTypes = {
  company: PropTypes.string,
  siteUrl: PropTypes.string,
  email: PropTypes.string,
}

const query = graphql`
  query Accessibility {
    site {
      siteMetadata {
        company
        siteUrl
        email
      }
    }
  }
`
