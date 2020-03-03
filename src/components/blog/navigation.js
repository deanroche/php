import React from "react"
import { Link } from "gatsby"
import { slugify } from "../../util/utilityFunctions"
import styled from "styled-components"
const navigation = ({ navigation }) => {
  const previous = navigation.previous
  const previousTitle = navigation.previousTitle
  const next = navigation.next
  const nextTitle = navigation.nextTitle

  return (
    <Container>
      <Previous>
        {(previous && (
          <>
            <span>Previous Post</span>
            <div>
              <Link to={`/blog/${slugify(previousTitle)}`}>
                <h4>{previousTitle}</h4>
              </Link>
            </div>
          </>
        )) || <div />}
      </Previous>
      <Next>
        {next && (
          <>
            <span>Next Post</span>
            <div>
              <Link to={`/blog/${slugify(nextTitle)}`}>
                <h4> {nextTitle}</h4>
              </Link>
            </div>
          </>
        )}
      </Next>
    </Container>
  )
}

const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    max-width: 1024px;
    margin: 15px auto;
  }
`

const Previous = styled.div`
  display: flex;
  flex-direction: column;
  span {
    display: inline-block;
    margin: 10px 0;
  }
  h4 {
  }
`
const Next = styled.div`
  display: flex;
  flex-direction: column;
  span {
    display: inline-block;
    margin: 10px 0;
    text-align: right;
  }
  h4 {
    text-align: right;
  }
`

export default navigation
