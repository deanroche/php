import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Hero from "../components/hero"
import InnerWrapper from "../components/innerWrapper"
import Layout from "../components/layout"
import SEO from "../SEO"
import styles from "./scss/privacy.module.scss"
const PrivacyPolicy = ({ date, company, siteUrl, email }) => {
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
            <SEO title="PHP | Privacy" />

            <InnerWrapper width={1024}>
              <article className={styles.privacy} id="privacy">
                <h1>Privacy Policy</h1>
                <small>Effective {date}</small>
                <h2>Summary</h2>
                <p>
                  The intention of this document is to explain as clearly as
                  possible {company} intention in gathering information about
                  the users of our website. We gather information in two ways.
                  General statistics through Google Analytics and contact
                  information submitted to us through our contact form.{" "}
                  {company} undertakes not to sell or rent to any third party
                  whatsoever any personally identifiable information about you.
                </p>
                <h3>1. Introduction </h3>
                <p>
                  It is {company} policy to respect your privacy regarding any
                  information we may collect while operating our website. This
                  Privacy Policy applies to "{siteUrl}" (hereinafter, "us",
                  "we", or "{siteUrl}
                  "). We respect your privacy and are committed to protecting
                  personally identifiable information you may provide us through
                  the Website. We have adopted this privacy policy to explain
                  what information may be collected on our Website, how we use
                  this information, and under what circumstances we may disclose
                  the information to third parties. This Privacy Policy applies
                  only to information we collect through the Website and does
                  not apply to our collection of information from other sources.
                </p>
                <h3>2. General Data Protection Regulation (GDPR)</h3>
                <p>We are a Data Controller of your information.</p>
                <p>
                  {company} legal basis for collecting and using the personal
                  information described in this Privacy Policy depends on the
                  Personal Information we collect and the specific context in
                  which we collect the information:
                </p>
                <ul>
                  <li> {company} needs to perform a contract with you</li>
                  <li>You have given {company} permission to do so</li>
                  <li>
                    Processing your personal information is in {company}{" "}
                    legitimate interests
                  </li>
                  <li>{company} needs to comply with the law</li>
                </ul>
                <p>
                  {company} will retain your personal information only for as
                  long as is necessary for the purposes set out in this Privacy
                  Policy. We will retain and use your information to the extent
                  necessary to comply with our legal obligations, resolve
                  disputes, and enforce our policies.
                </p>
                <p>
                  If you are a resident of the European Economic Area (EEA), you
                  have certain data protection rights. If you wish to be
                  informed what Personal Information we hold about you and if
                  you want it to be removed from our systems, please contact us.
                </p>
                <p>
                  In certain circumstances, you have the following data
                  protection rights:
                </p>
                <ul>
                  <li>
                    The right to access, update or to delete the information we
                    have on you.
                  </li>
                  <li>The right of rectification.</li>
                  <li>The right to object.</li>
                  <li>The right of restriction.</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
                <h3>3. Website Visitors</h3>
                <p>
                  Like most website operators, {company} collects
                  non-personally-identifying information of the sort that web
                  browsers and servers typically make available, such as the
                  browser type, language preference, referring site, and the
                  date and time of each visitor request. {company} purpose in
                  collecting non-personally identifying information is to better
                  understand how {company} visitors use its website.
                </p>
                <h3>4. Security</h3>
                <p>
                  The security of your Personal Information is important to us,
                  but remember that no method of transmission over the Internet,
                  or method of electronic storage is 100% secure. While we
                  strive to use commercially acceptable means to protect your
                  Personal Information, we cannot guarantee its absolute
                  security.
                </p>
                <p>
                  Our Website may contain links to external sites that are not
                  operated by us, mainly through our blog posts. If you click on
                  a third party link, you will be directed to that third party's
                  site. We strongly advise you to review the Privacy Policy and
                  terms and conditions of every site you visit.
                </p>
                <p>
                  We have no control over, and assume no responsibility for the
                  content, privacy policies or practices of any third party
                  sites, products or services.
                </p>
                <h3>5. Generating Statistics</h3>
                <p>
                  {company} may collect statistics about the behavior of
                  visitors to its website. {company} may display this
                  information publicly or provide it to others. However,{" "}
                  {company} does not disclose your personally-identifying
                  information.
                </p>
                <h3>6. Cookies</h3>
                <p>
                  Cookies identify your computer or device rather than you as an
                  individual user and are used for different purposes. Cookies
                  are small text files stored on your hard drive, which contain
                  information about your activity and preferences when visiting{" "}
                  {siteUrl}. These cookies allow us to monitor website traffic
                  and to store information about your preferences, which allows
                  us to customise the site according to your needs. If you wish
                  to change the way your browser handles cookies you can do so
                  through your browser’s settings. We utilised cookies for the
                  following reasons;
                </p>
                <p>Generating Statistics</p>
                <ul>
                  <li>
                    Measuring Website traffic such as the number of visits to
                    the Website
                  </li>
                  <li>Which Domains the visitors come from</li>
                  <li>Which pages visitors view on the Website</li>
                  <li>
                    Which overall geographical areas the visitors are located
                  </li>
                </ul>
                <p>Deletion of Cookies</p>
                <p>
                  You can delete the cookies already on your device. You can
                  typically delete cookies from the Privacy or History area,
                  available from the Settings or Options menu in the browser.
                </p>
                <h3>7. Privacy Policy Changes</h3>
                <p>
                  Although most changes are likely to be minor, {company} may
                  change its Privacy Policy from time to time, and in {company}{" "}
                  sole discretion. {company} encourages visitors to frequently
                  check this page for any changes to its Privacy Policy. Your
                  continued use of this site after any change in this Privacy
                  Policy will constitute your acceptance of such change.
                </p>
                <h3>8. Consent</h3>
                <p>
                  By using our website, you hereby consent to our Privacy Policy
                  and agree to its terms.
                </p>
                <h3>9. Contact</h3>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at {email}
                </p>
              </article>
            </InnerWrapper>
          </Layout>
        </>
      )}
    />
  )
}

export default PrivacyPolicy

PrivacyPolicy.propTypes = {
  date: PropTypes.string,
  company: PropTypes.string,
  siteUrl: PropTypes.string,
  email: PropTypes.string,
}

PrivacyPolicy.defaultProps = {
  date: "25 May 2018",
}

const query = graphql`
  query Privacy {
    site {
      siteMetadata {
        company
        siteUrl
        email
      }
    }
  }
`
