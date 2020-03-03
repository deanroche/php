import React from "react"
import Layout from "../components/layout"
import SEO from "../SEO"
import { Link } from "gatsby"
import { slugify } from "../util/utilityFunctions"
import styled from "styled-components"
const tagsPage = ({ pageContext }) => {
  const { tags } = pageContext // , tagPostCounts
  return (
    <Layout dark={true}>
      <SEO title="PHP | Tags" />
      <Tags className="container">
        <ul>
          {tags.map(tag => {
            return (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>
                  {tag} {/*  <span>{tagPostCounts[tag]}</span> */}
                </Link>
              </li>
            )
          })}
        </ul>
      </Tags>
    </Layout>
  )
}

const Tags = styled.div`
  padding: 150px 25px 25px 25px;

  ul {
    max-width: 1024px;
    margin: 0 auto;
    a:hover {
      text-decoration: underline;
    }
  }
`

export default tagsPage
