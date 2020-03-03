import React from "react"
import styled from "styled-components"

const InnerWrapper = ({ width, children, background }) => {
  return (
    <Wrapper width={width} background={background}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${props => (props.background ? props.background : "#fff")};
  flex-grow: 1;
  max-width: ${props => (props.width ? props.width + "px" : "1024px")};
  padding: 50px 25px;
  @media screen and (min-width: 800px) {
    margin: 0 auto;
  }
`

export default InnerWrapper
