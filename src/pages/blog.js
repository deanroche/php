import React from "react"
import Layout from "../components/layout"
import SEO from "../SEO"
import Image from "../components/image"
import GA from "../components/ga"
import { graphql, StaticQuery, Link } from "gatsby"
import Pagination from "../components/pagination"
import { slugify } from "../util/utilityFunctions"
import styled from "styled-components"
const BlogPage = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulBlogPost(
          sort: { fields: publishDate, order: ASC }
          limit: 12
        ) {
          totalCount
          edges {
            node {
              id
              title
              publishDate(formatString: "MMMM Do, YYYY")
              description
              image {
                title
                description
                fluid(quality: 100) {
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const postsPerPage = 12
      const numberOfPages = Math.ceil(
        data.allContentfulBlogPost.totalCount / postsPerPage
      )

      return (
        <Layout dark={true}>
          <SEO title="PHP | Blog" />
          <Blog className="section">
            <h1>Blog</h1>
            <div className="posts">
              {data.allContentfulBlogPost.edges.map((edge, index) => {
                return (
                  <article className="post" key={index}>
                    <Link to={`/blog/${slugify(edge.node.title)}`}>
                      <Image image={edge.node.image} />
                      <h4>{edge.node.title}</h4>
                      <p>{edge.node.description}</p>
                    </Link>
                  </article>
                )
              })}
            </div>
            <Pagination currentPage={1} numberOfPages={numberOfPages} />
          </Blog>

          <GA page="/blog" />
        </Layout>
      )
    }}
  />
)

const Blog = styled.section`
  padding: 150px 25px 25px 25px;
  h1 {
    text-decoration: underline;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 50px 0;
    font-size: 2.2rem;
  }

  .posts {
    .post {
      margin: 25px 0;
      h4,
      p {
        margin: 5px 0;
      }
      a {
      }
      img {
        max-height: 200px;
        object-fit: cover;
      }
    }
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
    padding: 225px 25px 25px 25px;
    .posts {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      .post {
        width: 30%;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .posts {
      max-width: 1024px;
      margin: 0 auto;
      .post {
        width: 30%;
      }
    }
  }
`

export default BlogPage
