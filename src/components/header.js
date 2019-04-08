import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Container from './Container'

const NavLink = styled(Link)`
  ${tw`block justify-end font-sans md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white`};
`
const HeaderWrapper = styled.div`
  ${tw`bg-pink py-8`}
`
const NavBar = styled.div`
  ${tw`flex`}
`

const Header = ({ siteTitle }) => {
  return (
    <HeaderWrapper>
      <Container>
        <NavBar>
          <NavLink
            to="/"
            css={css`
              color: pink;
              background-color: green;
            `}
          >
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavBar>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
