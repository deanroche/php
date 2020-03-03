import React from "react"
import Image from "../components/image"
import styled from "styled-components"

const membership = ({ data }) => {
  return (
    <Membership image={data.image.fluid.src}>
      <h2 id="join">{data.title}</h2>
      <div className="membership-options">
        {data.membershipOptions.map((option, index) => (
          <div className="option" key={index}>
            <div className="icon">
              <Image image={option.icon} />
              <h3>{option.title}</h3>
            </div>
            <p>
              €{option.cost}
              <small> /Month</small>
            </p>

            {/* <button>Join Now</button> */}
          </div>
        ))}
      </div>
    </Membership>
  )
}

const Membership = styled.section`
  background: ${props => (props.image ? `url(${props.image})` : "#333")};
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 25px;

  h2 {
    text-decoration: underline;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 50px 0;
    color: #fff;
    font-size: 2.2rem;
  }

  .option {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    margin: 25px 0;
    background: #fff;
    border: 1px solid #e4e4e4;
    box-shadow: 0px 1px 10px #2b2b2b;
    .icon {
      position: relative;
      min-height: 125px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      picture {
        position: absolute;
        align-self: center;
        top: 0;
        height: 150px;
        width: 150px;
        opacity: 0.1;
      }
      h3 {
        text-align: center;
        font-size: 2rem;
        text-transform: uppercase;
      }
    }

    p {
      font-size: 2.5rem;
      font-weight: bold;
      font-style: italic;
      text-align: center;
    }
  }
  button {
    display: block;
    margin: auto;
    border: none;
    padding: 15px;
    width: 80%;
    text-decoration: none;
    background: #333;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 2px;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 30px;
    border: 1px solid #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  }

  button:hover,
  button:focus {
    background: #fff;
    color: #2b2b2b;
    border: 1px solid #333;
  }

  button:active {
    transform: scale(0.99);
  }

  @media screen and (min-width: 768px) {
    .membership-options {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      .option {
        width: 45%;
        margin: 15px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .membership-options {
      max-width: 1024px;
      margin: 0 auto;
      .option {
        width: 30%;
        margin: 15px;
      }
    }
  }
`
export default membership
