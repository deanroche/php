import React, { Component } from "react"
import { Link } from "gatsby"
import ReactGA from "react-ga"
import CookieConsent from "react-cookie-consent"

class GA extends Component {
  initGA = () => {
    ReactGA.initialize("UA-153290191-1", { anonymizeIp: true })
    ReactGA.pageview(this.props.page)
  }

  componentDidMount() {
    this.initGA()
  }

  render() {
    const regionRequired = "europe"
    const timeZone = Intl.DateTimeFormat()
      .resolvedOptions()
      .timeZone.toLowerCase()
    if (timeZone.indexOf(regionRequired) !== -1) {
      var gdprRequired = true
    }

    return gdprRequired ? (
      <CookieConsent
        buttonText="Accept"
        buttonClasses="cookie-btn"
        disableStyles
        cookieName="GoogleAnalytics"
        onAccept={() => {
          this.initGA()
        }}
      >
        <p className="cookie-text">
          We use cookies to ensure that we give you the best experience on our
          website. <Link to="/privacy">Privacy Policy</Link>
        </p>
      </CookieConsent>
    ) : (
      this.initGA
    )
  }
}

export default GA
