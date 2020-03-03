import React, { Component } from "react"
import axios from "axios"
import styled from "styled-components"

require("formbase/src/styles/main.scss")

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    success: false,
    failure: false,
    loading: false,
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.setState({ loading: true })
    const axiosConfig = {
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
    axios
      .post(
        "/.netlify/functions/sendEmail",
        {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message,
        },
        axiosConfig
      )
      .then(
        () =>
          this.setState({
            success: true,
            name: "",
            email: "",
            message: "",
            loading: false,
          }),
        setTimeout(() => {
          this.setState({
            success: false,
          })
        }, 5000)
      )
      .catch(
        () => this.setState({ failure: true }),
        setTimeout(() => {
          this.setState({
            failure: false,
          })
        }, 5000)
      )
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }
  render() {
    const { data } = this.props
    return (
      <ContactSection>
        <h2 id="contact">{data.title}</h2>
        <p>{data.mainText.mainText}</p>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            required
            className="input"
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="input"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <label htmlFor="message">Your message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
            className="input"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <button className="button" type="submit">
            {this.state.loading ? "Sending" : "Submit"}
          </button>
          <div>{this.state.success ? "Thank you for your message" : ""}</div>
        </form>
        <Map
          dangerouslySetInnerHTML={{
            __html: `<iframe title="Gym map location" src="https://snazzymaps.com/embed/201504" width="100%" height="500px" style="border:none;"></iframe>`,
          }}
        ></Map>
      </ContactSection>
    )
  }
}

const ContactSection = styled.section`
  max-width: 768px;
  padding: 100px 25px;
  margin: 0 auto;
  h2 {
    text-decoration: underline;
    text-align: center;
    text-transform: uppercase;
    font-size: 2.2rem;
    margin: 0 0 50px 0;
  }

  form {
    margin: 0 0 50px 0;
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
`

const Map = styled.div`
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`

export default Contact
