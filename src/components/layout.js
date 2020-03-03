import React from "react"

// Components

import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"

const Layout = ({ children, dark }) => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]', { speed: 300 })
  }
  return (
    <Container>
      <Content>
        <Header dark={dark} />
        {children}
      </Content>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex-grow: 1;
`

export default Layout
