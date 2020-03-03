import React from "react"
import Image from "../components/image"
import { graphql, StaticQuery, Link } from "gatsby"
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiPhoneCall,
  FiMail,
  FiMap,
} from "react-icons/fi"
import styled from "styled-components"
require("formbase/src/styles/main.scss")
const Footer = () => (
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
          phoneNumber
          email
          address
          openingHours
          facebookLink
          twitterLink
          instagramLink
        }
      }
    `}
    render={data => {
      return (
        <Section>
          <HoursSection>
            <h3>Opening Hours</h3>
            <ul>
              {data.contentfulFooterSection.openingHours.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </HoursSection>

          <ContactSection>
            <h3>Contact</h3>
            <ul>
              <li>
                <a
                  href={`tel:${data.contentfulFooterSection.phoneNumber}`}
                  aria-label="Phone Number"
                >
                  <FiPhoneCall />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${data.contentfulFooterSection.email}`}
                  aria-label="Email Address"
                >
                  <FiMail />
                </a>
              </li>
              <li>
                <a
                  href={data.contentfulFooterSection.address}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Map Link"
                >
                  <FiMap />
                </a>
              </li>
            </ul>
            <h3>Social</h3>
            <ul>
              <li>
                <a
                  href={data.contentfulFooterSection.facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FiFacebook />
                </a>
              </li>
              <li>
                <a
                  href={data.contentfulFooterSection.twitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FiTwitter />
                </a>
              </li>
              <li>
                <a
                  href={data.contentfulFooterSection.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FiInstagram />
                </a>
              </li>
            </ul>
          </ContactSection>

          <Links>
            <Image image={data.contentfulFooterSection.logo} />
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/accessibility">Accessibility Statement</Link>
            <span>
              Built by <a href="https://www.dazzleworks.co">dazzleworks</a>
            </span>
            <span>
              &copy; {new Date().getFullYear()} Precision Health Performance
            </span>
          </Links>
        </Section>
      )
    }}
  />
)

const Links = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin 0 0 10px 0;
  }
  a,
  span {
    display: inline-block;
    margin: 2px 0;
  }
  span {
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    text-align: right;
  }
`

const Section = styled.footer`
  padding: 50px 25px;
  background: #333;
  img {
    max-width: 200px;
  }
  label,
  a,
  li,
  h3 {
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`
const ContactSection = styled.div`
  ul {
    display: flex;
    margin: 20px 0;
    li {
      display: flex;
      align-items: center;
      margin: 0 20px;
      svg {
        font-size: 1.5rem;
      }
    }
    li:first-child {
      margin: 0 20px 0 0;
    }
  }

  margin: 25px 0;

  @media screen and (min-width: 768px) {
    margin: 0 0 25px 0;
  }
`
const HoursSection = styled.div`
  margin: 25px 0;
  @media screen and (min-width: 768px) {
    margin: 0 0 25px 0;
  }
`

export default Footer
