import React from "react"
import Layout from "../components/layout"
import SEO from "../SEO"
import { Link } from "gatsby"
import { slugify } from "../util/utilityFunctions"
import styled from "styled-components"
const catsPage = ({ pageContext }) => {
  const { categories, categoriesCount } = pageContext
  return (
    <Layout dark={true}>
      <SEO title="PHP | Categories" />
      <Cats className="container">
        <ul>
          {categories.map((cat, index) => {
            return (
              <li key={cat}>
                <Link to={`/category/${slugify(categories[index])}`}>
                  {cat} {/* <span>{categoriesCount[cat]}</span> */}
                </Link>
              </li>
            )
          })}
        </ul>
      </Cats>
    </Layout>
  )
}

const Cats = styled.div`
  padding: 150px 25px 25px 25px;

  ul {
    max-width: 1024px;
    margin: 0 auto;
    a:hover {
      text-decoration: underline;
    }
  }
`

export default catsPage
