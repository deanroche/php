import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import GA from "../components/ga"
import SEO from "../SEO"

import Image from "../components/image"
import Layout from "../components/layout"

import { FiTwitter, FiInstagram } from "react-icons/fi"
const coaches = ({ data }) => {
  const coaches = data.contentfulCoachesPage.coaches

  return (
    <Layout>
      <SEO title="PHP | Coaches" />
      <Coaches>
        <Content>
          <h1> {data.contentfulCoachesPage.title}</h1>
          <p>{data.contentfulCoachesPage.mainText.mainText}</p>
        </Content>
        <Coach>
          {coaches.map((coach, index) => {
            const coachID = coach.name.toLowerCase().replace(/\s/g, "")
            return (
              <div className="coach" key={index} id={coachID}>
                <div className="bio">
                  <h2>{coach.name}</h2>
                  <h4>{coach.title}</h4>
                  {documentToReactComponents(coach.bio.json)}
                  <ul className="social">
                    {coach.twitter !== "None" ? (
                      <li>
                        <a href={coach.twitter}>
                          <FiTwitter />
                        </a>
                      </li>
                    ) : null}
                    {coach.instagram !== "None" ? (
                      <li>
                        <a href={coach.instagram}>
                          <FiInstagram />
                        </a>
                      </li>
                    ) : null}
                  </ul>
                </div>
                <Image image={coach.image} />
              </div>
            )
          })}
        </Coach>
      </Coaches>
      <GA page="/coaches" />
    </Layout>
  )
}

const Coaches = styled.section`
  padding: 100px 0 0 0;
  background: #333;

  h1,
  h2,
  p {
    color: #fff;
  }

  .coach {
    display: flex;
    align-content: center;
    justify-content: space-evenly;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .bio {
      display: flex;
      flex-direction: column;

      padding: 25px;
      .social {
        display: flex;
        li {
          margin: 0 10px 0 0;
          svg {
            font-size: 1.5rem;
          }
        }
      }
    }
    @media screen and (min-width: 768px) {
      .bio {
        padding: 50px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .coach:nth-child(odd) {
      picture {
        order: 1;
      }
      .bio {
        order: 2;
      }
    }
  }
`

const Content = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 25px;
  h1 {
    text-decoration: underline;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 50px 0;
    font-size: 2.2rem;
  }
  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`

const Coach = styled.div`
  background: #fff;

  h1,
  h2,
  p {
    color: #2b2b2b;
  }

  .coach {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      flex-direction: row;

      .bio,
      picture {
        min-width: 50%;
      }
    }
    @media screen and (min-width: 1024px) {
      img,
      .bio {
      }
    }
  }
`

export const query = graphql`
  {
    contentfulCoachesPage {
      internalName
      title
      mainText {
        mainText
      }
      coaches {
        id
        internalName
        name
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
        bio {
          json
        }
        twitter
        instagram
      }
    }
  }
`

export default coaches
