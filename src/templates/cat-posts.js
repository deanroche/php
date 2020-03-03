import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../SEO"
import Layout from "../components/layout"
import { slugify } from "../util/utilityFunctions"
import styled from "styled-components"
const catPosts = ({ data, pageContext }) => {
  const { cat } = pageContext

  const { totalCount } = data.allContentfulBlogPost

  const pageHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } with category "${cat}"`

  return (
    <Layout title="Categories" dark={true}>
      <SEO title={`Categories | ${cat}`} />
      <Categories className="container">
        <h1>{pageHeader}</h1>

        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <div key={node.id} className="post">
            <Link to={`/blog/${slugify(node.title)}`}>
              <h2>{node.title}</h2>
              <span>{node.publishDate}</span>
            </Link>
          </div>
        ))}
      </Categories>
    </Layout>
  )
}

const Categories = styled.section`
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

export const catQuery = graphql`
  query($cat: String!) {
    allContentfulBlogPost(
      sort: { fields: publishDate, order: DESC }
      filter: { category: { in: [$cat] } }
    ) {
      totalCount
      edges {
        node {
          id
          title
          publishDate(formatString: "MMMM Do, YYYY")

          tags
          category
          body {
            json
          }
        }
      }
    }
  }
`
export default catPosts
