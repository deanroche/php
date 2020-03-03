import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../SEO"
import Layout from "../components/layout"
import styled from "styled-components"
import { slugify } from "../util/utilityFunctions"
const tagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allContentfulBlogPost
  const pageHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout title="Tags" dark={true}>
      <SEO title={`Tag | ${tag}`} />
      <Tags className="container">
        <h1>{pageHeader}</h1>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <div key={node.id} className="post">
            <Link to={`/blog/${slugify(node.title)}`}>
              <h2>{node.title}</h2>
              <span>{node.publishDate}</span>
            </Link>
          </div>
        ))}
      </Tags>
    </Layout>
  )
}

const Tags = styled.div`
  padding: 150px 25px 25px 25px;
  margin: 0 auto;
  max-width: 1024px;
  h1 {
    text-decoration: underline;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 50px 0;
    font-size: 2.2rem;
  }

  .post {
    margin: 25px 0;
    display: flex;
    flex-direction: column;
  }
`

export const tagQuery = graphql`
  query($tag: String!) {
    allContentfulBlogPost(
      sort: { fields: publishDate, order: DESC }
      filter: { tags: { in: [$tag] } }
    ) {
      totalCount
      edges {
        node {
          id
          title
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          body {
            json
          }
        }
      }
    }
  }
`
export default tagPosts
