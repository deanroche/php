import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Image from "../image"

import HeadShake from "react-reveal/HeadShake"
import { FiTwitter, FiInstagram, FiFacebook, FiLink } from "react-icons/fi"

require("formbase/src/styles/main.scss")
class author extends Component {
  state = {
    link: "",
    copied: false,
  }

  getUrl = () => {
    this.setState({
      link: `https://www.precisionhealthperformance.com/blog/${this.props.slug}`,
    })
  }

  copyUrl = evt => {
    evt.target.select()
    document.execCommand("copy")
    this.setState({ copied: true })
    setTimeout(() => {
      this.setState({ link: "" })
    }, 5000)
  }

  render() {
    const { name, title, image, twitter, instagram, slug } = this.props
    return (
      <Author>
        {name !== "None" && (
          <Name>
            <Link to={`/coaches#${name.toLowerCase().replace(/\s/g, "")}`}>
              {name}
            </Link>
          </Name>
        )}
        {title !== "None" && <Title>{title}</Title>}
        {image !== "None" && <Avatar image={image} />}
        <ListItems>
          <ListItem>
            <h4>Social</h4>
          </ListItem>
          {twitter !== "None" && (
            <ListItem>
              <LinkA href={twitter}>
                <FiTwitter title="Twitter" />
              </LinkA>
            </ListItem>
          )}

          {instagram !== "None" && (
            <ListItem>
              <LinkA href={instagram}>
                <FiInstagram title="Instagram" />
              </LinkA>
            </ListItem>
          )}
        </ListItems>

        <ShareList>
          <ListItem>
            <h4>Share</h4>
          </ListItem>
          <ListItem>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://www.precisionhealthperformance.com/blog/${slug}`}
              title="Share to Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Facebook:</span>
              <FiFacebook />
            </a>
          </ListItem>
          <ListItem>
            <a
              href={`https://twitter.com/intent/tweet/?text=Check this out!&url=https://www.precisionhealthperformance.com/blog/${slug}`}
              title="Share to Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Twitter:</span>
              <FiTwitter />
            </a>
          </ListItem>
          <ListItem>
            <span tabIndex="0" onClick={this.getUrl}>
              <span>Get Link:</span>
              <FiLink />
            </span>
          </ListItem>
          {this.state.link !== "" && (
            <ListItem>
              <input
                readOnly
                onClick={evt => this.copyUrl(evt)}
                type="text"
                className="input"
                value={this.state.link}
              />
              {this.state.copied ? <HeadShake>Copied!</HeadShake> : ""}
            </ListItem>
          )}
        </ShareList>
      </Author>
    )
  }
}

const Author = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px auto;

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  border-radius: 5px;
  padding: 25px 10px;
  * {
    margin: 0 0 10px 0;
  }
  hr {
    color: #333;
    width: 80%;
    height: 1px;
  }
`
const Name = styled.h4`
  font-weight: 400;
`
const Title = styled.span`
  font-style: italic;
  text-align: center;
`
const Avatar = styled(Image)`
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
  }
`
const ListItems = styled.ul`
  width: 100%;
  h4 {
    width: 100%;
    text-align: center;
  }
`
const ListItem = styled.li`
  text-align: center;
  svg {
    width: 25px;
    height: 25px;
  }
`
const LinkA = styled("a")`
  svg {
    width: 25px;
    height: 25px;
  }
`

const ShareList = styled.ul`
  width: 80%;

  h4 {
    width: 100%;
    text-align: center;
  }
  a,
  span {
    display: flex;
    justify-content: space-between;
  }
`

author.defaultProps = {
  name: "None",
  title: "None",
  avatar: "None",
  linkedIn: "None",
  twitter: "None",
  instagram: "None",
  website: "None",
}

export default author
