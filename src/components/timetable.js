import React, { Component } from "react"
import axios from "axios"
import { Link } from "gatsby"

//import InnerWrapper from "../components/innerWrapper"
import Tabs from "./tabs"
import styled from "styled-components"

class Timetable extends Component {
  state = {}

  componentDidMount() {
    axios.get("/.netlify/functions/getClasses").then(response => {
      this.setState({
        classes: response.data.classes,
      })
    })
  }

  render() {
    const { classes } = this.state
    return (
      <Section
        className="timetable"
        style={{ position: `relative`, top: `-1px` }}
      >
        <div className="wrapper">
          {!classes && <p>Loading...</p>}
          {classes && (
            <Tabs>
              <ul label="Sunday">
                {classes.sunday.map((item, index) => {
                  const coachID = item.coach.toLowerCase().replace(/\s/g, "")
                  const classID = item.class.toLowerCase().replace(/\s/g, "")

                  return (
                    <li className="class" key={index}>
                      <span>{item.time}</span>
                      <span>
                        <Link to={`/classes#${classID}`}>{item.class}</Link>
                      </span>
                      <span>
                        <Link to={`/coaches#${coachID}`}>{item.coach}</Link>
                      </span>
                    </li>
                  )
                })}
              </ul>
              <ul label="Monday">
                {classes.monday.map((item, index) => {
                  const coachID = item.coach.toLowerCase().replace(/\s/g, "")
                  const classID = item.class.toLowerCase().replace(/\s/g, "")

                  return (
                    <li className="class" key={index}>
                      <span>{item.time}</span>
                      <span>
                        <Link to={`/classes#${classID}`}>{item.class}</Link>
                      </span>
                      <span>
                        <Link to={`/coaches#${coachID}`}>{item.coach}</Link>
                      </span>
                    </li>
                  )
                })}
              </ul>
              <ul label="Tuesday">
                {classes.tuesday.map((item, index) => {
                  const coachID = item.coach.toLowerCase().replace(/\s/g, "")
                  const classID = item.class.toLowerCase().replace(/\s/g, "")

                  return (
                    <li className="class" key={index}>
                      <span>{item.time}</span>
                      <span>
                        <Link to={`/classes#${classID}`}>{item.class}</Link>
                      </span>
                      <span>
                        <Link to={`/coaches#${coachID}`}>{item.coach}</Link>
                      </span>
                    </li>
                  )
                })}
              </ul>
              <ul label="Wednesday">
                {classes.wednesday.map((item, index) => {
                  const coachID = item.coach.toLowerCase().replace(/\s/g, "")
                  const classID = item.class.toLowerCase().replace(/\s/g, "")

                  return (
                    <li className="class" key={index}>
                      <span>{item.time}</span>
                      <span>
                        <Link to={`/classes#${classID}`}>{item.class}</Link>
                      </span>
                      <span>
                        <Link to={`/coaches#${coachID}`}>{item.coach}</Link>
                      </span>
                    </li>
                  )
                })}
              </ul>
              <ul label="Thursday">
                {classes.thursday.map((item, index) => {
                  const coachID = item.coach.toLowerCase().replace(/\s/g, "")
                  const classID = item.class.toLowerCase().replace(/\s/g, "")

                  return (
                    <li className="class" key={index}>
                      <span>{item.time}</span>
                      <span>
                        <Link to={`/classes#${classID}`}>{item.class}</Link>
                      </span>
                      <span>
                        <Link to={`/coaches#${coachID}`}>{item.coach}</Link>
                      </span>
                    </li>
                  )
                })}
              </ul>
              <ul label="Friday">
                {classes.friday.map((item, index) => {
                  const coachID = item.coach.toLowerCase().replace(/\s/g, "")
                  const classID = item.class.toLowerCase().replace(/\s/g, "")

                  return (
                    <li className="class" key={index}>
                      <span>{item.time}</span>
                      <span>
                        <Link to={`/classes#${classID}`}>{item.class}</Link>
                      </span>
                      <span>
                        <Link to={`/coaches#${coachID}`}>{item.coach}</Link>
                      </span>
                    </li>
                  )
                })}
              </ul>
              <ul label="Saturday">
                {classes.saturday.map((item, index) => {
                  const coachID = item.coach.toLowerCase().replace(/\s/g, "")
                  const classID = item.class.toLowerCase().replace(/\s/g, "")

                  return (
                    <li className="class" key={index}>
                      <span>{item.time}</span>
                      <span>
                        <Link to={`/classes#${classID}`}>{item.class}</Link>
                      </span>
                      <span>
                        <Link to={`/coaches#${coachID}`}>{item.coach}</Link>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </Tabs>
          )}
        </div>
        <svg
          className="svg"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 601"
          style={{ top: `-1px` }}
        >
          <polygon
            className="cls-1"
            fill="#333"
            points="0 601 1920 108 1920 0 0 0 0 601"
          />
        </svg>
      </Section>
    )
  }
}

const Section = styled.section`
  .wrapper {
  }
`

const Header = styled.li`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  span {
    color: #fff;
  }

  span:nth-child(3) {
    display: none;
  }
  @media screen and (min-width: 426px) {
    span:nth-child(3) {
      display: block;
    }
  }
`

export default Timetable
