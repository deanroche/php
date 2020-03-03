import React from "react"
import Timetable from "./timetable"
import styled from "styled-components"

const classes = ({ data }) => {
  return (
    <Classes id="classes">
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
      <div className="text">
        <h2>{data.title}</h2>
        <p>{data.mainText.mainText}</p>
      </div>
      <Timetable />
    </Classes>
  )
}

const Classes = styled.section`
  .text {
    background: #333;

    p {
      max-width: 768px;
      margin: 0 auto;
    }
    h2 {
      text-decoration: underline;
      text-transform: uppercase;
      text-align: center;
      margin: 0 0 50px 0;
      color: #fff;
      font-size: 2.2rem;
    }
    padding: 25px 25px 0 25px;
    p {
      text-align: center;
      color: #fff;
    }
  }
`

export default classes
