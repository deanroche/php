import React, { Component } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"
require("formbase/src/styles/main.scss")

class Newsletter extends Component {
  state = {
    email: "",
    fname: "",
    msg: null,
    loading: false,
  }

  handleSubmit = async evt => {
    evt.preventDefault()
    this.setState({ loading: true })
    const result = await addToMailchimp(this.state.email, {
      FNAME: this.state.fname,
    })

    this.setState({ msg: result.msg, loading: false })
    setTimeout(() => {
      this.setState({ email: "", fname: "", msg: null })
    }, 3000)
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }
  render() {
    const { data } = this.props
    return (
      <Section>
        <h3>{data.title}</h3>
        <p>{data.mainText.mainText}</p>
        <form method="post" onSubmit={this.handleSubmit}>
          <div className="fields">
            <div>
              <label htmlFor="fname">Your Name:</label>
              <input
                className="input"
                type="text"
                name="fname"
                id="fname"
                required
                value={this.state.fname}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="emailAddress">Your email address:</label>
              <input
                className="input"
                type="email"
                name="email"
                id="emailAddress"
                required
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button>{this.state.loading ? "Sending" : "Submit"}</button>
          <span>{this.state.msg}</span>
        </form>
      </Section>
    )
  }
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
  padding: 25px;
  max-width: 768px;
  margin: 0 auto;
  h3 {
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

  button {
    display: block;
    margin-left: auto;
    border: none;
    padding: 15px;

    text-decoration: none;
    background: #333;
    color: #ffffff;
    border-radius: 30px;
    min-width: 150px;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
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
    margin: 50px auto;
    padding: 50px;

    form {
      display: flex;
      flex-direction: column;
      .fields {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`

export default Newsletter
