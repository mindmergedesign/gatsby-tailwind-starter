import React from 'react'

import { css } from 'styled-components'

import Layout from '../components/layout'
import Container from '../components/Container'

const IndexPage = () => (
  <Layout>
    <section
      css={css`
        ${tw`bg-grey-lighter py-8`}
      `}
    >
      <Container>
        <h1
          css={css`
            ${tw`mb-0`}
          `}
        >
          Hi people
        </h1>
        <p>
          Welcome to your new Gatsby + Tailwind CSS + Styled Components site
        </p>
        <p>Now go build something great.</p>
      </Container>
    </section>
  </Layout>
)

export default IndexPage
