import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../SEO"
import styled from "styled-components"
export default () => (
  <>
    <SEO title="PHP | 404" />
    <Layout dark={true}>
      <Wraper>
        <h1>404</h1>
        <p>
          Opps, you've stumbled across a page that doesn't exist!{" "}
          <Link to="/">Click here to go back to the home page</Link>
        </p>
      </Wraper>
    </Layout>
  </>
)

const Wraper = styled.div`
  padding: 150px 25px 25px 25px;
  max-width: 768px;
  margin: 0 auto;
`
