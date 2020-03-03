import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
const body = ({ body }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return <Body>{documentToReactComponents(body, options)}</Body>
}

const Body = styled.div`
  a {
    text-decoration: underline;
  }
  ul {
    padding: 0 0 0 20px;
    list-style: disc;
  }
  li {
    margin: 0 0 5px 0;
  }
`

export default body
