import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Image from "../components/image"
import "./scss/hamburger.css"
class Navigation extends Component {
  state = {
    toggle: false,
    width: 0,
  }

  handleClick = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle,
    }))
  }

  closeMenu = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle,
    }))
  }

  render() {
    const { toggle } = this.state
    const { logo, dark } = this.props
    return (
      <>
        <Nav dark={dark}>
          <Link to="/">
            <Image image={logo} />
          </Link>
          <button
            onClick={this.handleClick}
            className={`hamburger hamburger--squeeze ${
              toggle ? "is-active" : ""
            }`}
            type="button"
            aria-expanded={toggle ? "true" : "false"}
            aria-label="Open Menu"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>

          <List toggle={toggle}>
            <ListItem>
              <Link to="/#about" onClick={this.closeMenu}>
                About
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/#facility" onClick={this.closeMenu}>
                Facility
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/#services" onClick={this.closeMenu}>
                Services
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/blog" onClick={this.closeMenu}>
                Blog
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/#classes" onClick={this.closeMenu}>
                Classes
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/coaches" onClick={this.closeMenu}>
                Coaches
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/#contact" onClick={this.closeMenu}>
                Contact
              </Link>
            </ListItem>
          </List>
        </Nav>

        <NavDesktop dark={dark}>
          <Link to="/">
            <Image image={logo} />
          </Link>
          <ListDesktop>
            <ListItemDesktop>
              <Link to="/#about">About /</Link>
            </ListItemDesktop>
            <ListItemDesktop>
              <Link to="/#facility">Facility /</Link>
            </ListItemDesktop>

            <ListItemDesktop>
              <Link to="/#services">Services /</Link>
            </ListItemDesktop>
            <ListItemDesktop>
              <Link to="/blog">Blog /</Link>
            </ListItemDesktop>
            <ListItemDesktop>
              <Link to="/#classes">Classes /</Link>
            </ListItemDesktop>
            <ListItemDesktop>
              <Link to="/coaches">Coaches /</Link>
            </ListItemDesktop>
            <ListItemDesktop>
              <Link to="/#contact">Contact </Link>
            </ListItemDesktop>
          </ListDesktop>
        </NavDesktop>
      </>
    )
  }
}

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: relative;
  background: ${props => (props.dark ? "#333" : "")};
  img {
    position: relative;
    max-width: 175px;
    z-index: 999;
  }
  @media (min-width: 890px) {
    display: none;
  }
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px 10px 20px;
  position: absolute;
  background: #333;
  top: 0;
  left: ${props => (props.toggle ? "0px" : "-10000px")};
  width: 100%;
  height: 100vh;
  transition: all 0.5s ease-in-out;
  z-index: 11;
`
const ListItem = styled.li`
  margin: 0 0 20px 0;
  a {
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    @media (min-width: 375px) {
      font-size: 1.3rem;
    }
    @media (min-width: 414px) {
      font-size: 1.3rem;
    }
    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
  }
`

const NavDesktop = styled.nav`
  display: none;
  @media (min-width: 890px) {
    display: flex;
    justify-content: space-between;

    padding: 15px 50px;
    background: ${props => (props.dark ? "#333" : "transparent")};
    img {
      max-width: 175px;
    }
  }
`
const ListDesktop = styled.ul`
  display: flex;

  align-items: center;
`
const ListItemDesktop = styled.li`
  margin: 0 10px 0 0;
  :last-child {
    margin: 0;
  }
  a {
    position: relative;
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    @media (min-width: 375px) {
      font-size: 1rem;
    }
    @media (min-width: 414px) {
      font-size: 1rem;
    }
    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
    &:hover {
      &::after {
        position: absolute;
        bottom: -2px;
        left: 0;
        display: inline-block;
        content: " ";
        border-bottom: 1px solid #fff;
        width: 85%;
      }
    }
  }

  :nth-last-child(2) {
    text-align: right;
  }
  :last-child {
    text-align: right;
  }
`

export default Navigation
