import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import GA from "../components/ga"
import SEO from "../SEO"

import Image from "../components/image"
import Layout from "../components/layout"

const classesPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="PHP | Classes" />
      <Classes>
        <Content>
          <h1> {data.contentfulClassesPage.title}</h1>
          <p>{data.contentfulClassesPage.mainText.mainText}</p>
        </Content>
        <Class>
          {data.contentfulClassesPage.classes.map((item, index) => {
            const classID = item.name.toLowerCase().replace(/\s/g, "")

            return (
              <div className="class" id={classID} key={index}>
                <div className="details">
                  <h2>{item.name}</h2>
                  {documentToReactComponents(item.description.json)}
                </div>
                <Image image={item.image} />
              </div>
            )
          })}
        </Class>
      </Classes>
      <GA page="/classes" />
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulClassesPage {
      internalName
      title
      mainText {
        mainText
      }
      classes {
        id
        internalName
        name
        description {
          json
        }
        image {
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
    }
  }
`
const Classes = styled.section`
  padding: 100px 0 0 0;
  background: #333;

  h1,
  h2,
  p {
    color: #fff;
  }

  .class {
    display: flex;
    align-content: center;
    justify-content: space-evenly;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      min-height: 100%;
      padding: 25px;
    }
    @media screen and (min-width: 768px) {
      .details {
        padding: 50px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .class:nth-child(odd) {
      picture {
        order: 1;
      }
      .details {
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

const Class = styled.div`
  background: #fff;

  h1,
  h2,
  p {
    color: #2b2b2b;
  }

  .class {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      flex-direction: row;

      .details,
      picture {
        min-width: 50%;
        min-height: 70vh;
        max-height: 70vh;
      }
    }
    @media screen and (min-width: 1024px) {
      img,
      .details {
        min-height: 100%;
        max-height: 90vh;
      }
    }
  }
`

export default classesPage
