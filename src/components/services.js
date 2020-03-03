import React from "react"
import Image from "../components/image"
import styled from "styled-components"
const services = ({ data }) => {
  return (
    <>
      <svg
        className="svg"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 601"
        style={{ transform: `rotate(-180deg)`, top: `1px` }}
      >
        <polygon
          className="cls-1"
          fill="#333"
          points="0 601 1920 108 1920 0 0 0 0 601"
        />
      </svg>
      <Services>
        <h2 id="services">{data.title}</h2>
        <p>{data.mainText.mainText}</p>
        <div className="services">
          {data.mainServices.map((service, index) => (
            <div className="service" key={index}>
              <div className="image">
                <Image image={service.icon} />
                <h3>{service.title}</h3>
              </div>
              <p>{service.text.text}</p>
            </div>
          ))}
        </div>
        {/* <button>View All Services</button> */}
      </Services>
      <svg
        className="svg"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 601"
        style={{ transform: `rotate(360deg)`, top: `-1px` }}
      >
        <polygon
          className="cls-1"
          fill="#333"
          points="0 601 1920 108 1920 0 0 0 0 601"
        />
      </svg>
    </>
  )
}

const Services = styled.section`
  display: flex;
  flex-direction: column;
  padding: 25px;
  background: #333;
  h2 {
    text-decoration: underline;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 50px 0;
    font-size: 2.2rem;
    color: #fff;
  }
  p {
    text-align: center;
    color: #fff;
  }

  .service {
    margin: 25px 0;
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      position: relative;

      min-height: 125px;
      margin: 0 0 25px 0;
      picture {
        position: absolute;
        align-self: center;
        top: 0;
        height: 125px;
        width: 125px;
        opacity: 0.3;
      }
      h3 {
        text-align: center;
        font-size: 2rem;
        text-transform: uppercase;
        color: #fff;
      }
    }
    p {
      text-align: center;
    }
  }

  button {
    display: block;
    margin: 25px auto;
    border: none;
    padding: 15px;
    max-width: 300px;
    text-decoration: none;
    background: #fff;
    color: #2b2b2b;
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 2px;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 30px;
    border: 1px solid #333;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  }

  button:hover,
  button:focus {
    background: #333;
    color: #fff;
    border: 1px solid #fff;
  }

  button:active {
    transform: scale(0.99);
  }

  @media screen and (min-width: 768px) {
    p {
      padding-left: 50px;
      padding-right: 50px;
    }
    .service {
      padding: 0 50px;
    }
  }

  @media screen and (min-width: 1024px) {
    p {
      max-width: 1024px;
      margin: 0 auto;
    }
    .services {
      display: flex;
      flex-wrap: wrap;
      max-width: 1024px;
      margin: 0 auto;

      .service {
        width: 33.333%;
        padding: 0;
      }
    }
  }

  @media screen and (min-width: 1440px) {
  }
`

export default services
