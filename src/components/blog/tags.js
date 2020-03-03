import React from "react"
import { Link } from "gatsby"
import { FiTag } from "react-icons/fi"
import { slugify } from "../../util/utilityFunctions"
import styled from "styled-components"

const tags = ({ tags }) => {
  return (
    <Container>
      <span>
        <FiTag /> Tags
      </span>
      <List>
        {tags.map(tag => {
          return (
            <ListItem key={tag}>
              <StyledLink to={`/tag/${slugify(tag)}`}>{tag}</StyledLink>
            </ListItem>
          )
        }) || <div />}
      </List>
    </Container>
  )
}

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

export default tags
