import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import Image from "../components/image"

import p from "../images/p.png"
import h from "../images/h.png"
const About = ({ data }) => {
  return (
    <Section>
      <svg
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 301"
      >
        <polygon
          className="cls-1"
          fill="#333"
          points="0 301 1920 108 1920 0 0 0 0 301"
        ></polygon>
      </svg>

      <Wrapper>
        <h2 id="about">{data.title}</h2>
        {documentToReactComponents(data.mainText.json)}
      </Wrapper>
      <div className="precision">
        <div className="text">
          <h3 className="precision-heading">{data.precisionTitle}</h3>
          <p>{data.precisionText.precisionText}</p>
        </div>
        <div className="image">
          <Image image={data.precisionImage} />
        </div>
      </div>
      <div className="health">
        <div className="image">
          <Image image={data.healthImage} />
        </div>
        <div className="text">
          <h3 className="health-heading">{data.healthTitle}</h3>
          <p>{data.healthText.healthText}</p>
        </div>
      </div>
      <div className="performance">
        <div className="text">
          <h3 className="performance-heading">{data.performanceTitle}</h3>
          <p>{data.performanceText.performanceText}</p>
        </div>
        <div className="image">
          <Image image={data.performanceImage} />
        </div>
      </div>
    </Section>
  )
}
const Section = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    text-decoration: underline;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 50px 0;
    font-size: 2.2rem;
  }
  h2,
  p {
    text-align: center;
    margin: 0 0 25px 0;
  }

  p {
    max-width: 768px;
    margin: 0 auto;
  }
  .precision,
  .health,
  .performance {
    width: 100%;
  }

  .text,
  .image {
    min-height: 300px;
    max-height: 450px;
  }

  .text {
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    h3 {
      position: relative;
      text-align: center;
      font-size: 2rem;
      text-transform: uppercase;
      width: 100%;
    }
    h3::after {
      position: absolute;
      top: 50px;
      width: 100%;
      left: 0;
      z-index: -9;
      opacity: 0.2;
    }
  }

  .precision-heading::after {
    content: url(${p});
  }
  .health-heading::after {
    content: url(${h});
    transform: rotate(180deg);
  }
  .performance-heading::after {
    content: url(${p});
  }

  .image {
    img {
      object-fit: cover;
      height: 100%;
    }
  }
  .health {
    display: flex;
    flex-direction: column;
    .text {
      order: 1;
    }
    .image {
      order: 2;
    }
  }

  @media screen and (min-width: 768px) {
    margin: 0 0 100px 0;
    .text,
    .image {
      min-height: 50vh;
      max-height: 50vh;
    }
    .precision,
    .health,
    .performance {
      display: flex;
      .image,
      .text {
        width: 50%;
      }
    }

    .text {
      padding: 50px;
    }

    .health {
      flex-direction: row;
      .text {
        order: 2;
      }
      .image {
        order: 1;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .image,
    .text {
      min-height: 90vh;
      max-height: 90vh;
    }
  }
`

const Wrapper = styled.div`
  padding: 0 25px 25px 25px;
  max-width: 1024px;
  margin: 0 auto;
`

export default About
