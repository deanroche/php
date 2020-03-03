import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import { FiLayers } from "react-icons/fi"
import { slugify } from "../../util/utilityFunctions"
import styled from "styled-components"

const categories = () => (
  <StaticQuery
    query={graphql`
      {
        categories: allContentfulBlogPost {
          edges {
            node {
              category
            }
          }
        }
      }
    `}
    render={data => {
      let categoriesArr = []
      data.categories.edges.forEach(category => {
        categoriesArr.push(category.node.category)
      })
      categoriesArr = Array.from(new Set(categoriesArr))

      return (
        <Container>
          <span>
            <FiLayers /> Categories
          </span>
          <List>
            {categoriesArr.map(category => (
              <ListItem key={category}>
                <StyledLink to={`/category/${slugify(category)}`}>
                  {category}
                </StyledLink>
              </ListItem>
            ))}
          </List>
        </Container>
      )
    }}
  />
)
const Container = styled.div`
  margin: 25px 0;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 1024px;
    margin: 25px auto;
  }
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  margin: 0 10px 0 0;
`
const StyledLink = styled(Link)`
  text-decoration: underline;
`

export default categories
