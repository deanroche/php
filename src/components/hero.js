import React from "react"
import styled from "styled-components"
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"
import Typewriter from "typewriter-effect"
const hero = ({ data }) => {
  return (
    <Hero image={data.image.fluid.src}>
      {/* <h1>{data.title}</h1> */}
      <h1>
        A FACILITY TO HELP YOU BECOME THE
        <Typewriter
          options={{
            strings: ["HEALTHIEST", "STRONGEST", "HAPPIEST"],
            autoStart: true,
            loop: true,
          }}
        />
        VERSION OF YOU.
      </h1>
      <div className="buttons">
        <a href={data.buttonLeftLink} className="button">
          {data.buttonLeftText}
        </a>
        <a href={data.buttonRightLink} className="button">
          {data.buttonRightText}
        </a>
      </div>
      <ul>
        <li>
          <a
            href={data.facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FiFacebook />
          </a>
        </li>
        <li>
          <a
            href={data.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FiInstagram />
          </a>
        </li>
        <li>
          <a
            href={data.twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FiTwitter />
          </a>
        </li>
      </ul>
    </Hero>
  )
}

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => (props.image ? `url(${props.image})` : "#333")};
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  h1 {
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 50px 0;
    font-size: 1.6rem;
    color: #fff;
    line-height: 1.4;
    max-width: 1024px;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    width: 50%;
    .button {
      display: inline-block;
      border: none;
      padding: 10px;
      margin: 10px 0;
      text-decoration: none;
      background: #fff;

      font-size: 1rem;
      cursor: pointer;
      text-align: center;
      transition: background 250ms ease-in-out, transform 150ms ease;
      -webkit-appearance: none;
      -moz-appearance: none;
      text-transform: uppercase;
      font-weight: bold;
      border-radius: 30px;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    }

    .button:hover,
    .button:focus {
      background: #333;
      color: #fff;
    }

    .button:active {
      transform: scale(0.99);
    }
  }

  ul {
    display: flex;
    justify-content: center;
    position: absolute;

    width: 100%;
    bottom: 0;
    margin: 10px 0;
    a {
      margin: 0 10px;
    }
    svg {
      color: #fff;
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 2.5rem;

      line-height: 1.4;
    }

    .buttons {
      flex-direction: row;
      justify-content: center;
      .button {
        min-width: 175px;
        margin: 0 10px;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    h1 {
      font-size: 3rem;
    }
  }
`

export default hero
