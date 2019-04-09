import React from 'react'
import { css } from 'styled-components'
import { Box, Flex } from 'rebass'
import Caps from '../components/Caps'

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
        <Flex flexWrap="wrap">
          <Box my={2} width={[1, 1 / 2]}>
            <Caps
              as="h1"
              fontSize={[4, 5, 6]}
              css={css`
                border-bottom: 1px solid red;
              `}
            >
              Hi people
            </Caps>
          </Box>
          <Box width={[1, 1 / 2]}>
            <p>
              Welcome to your new Gatsby + Tailwind CSS + Styled Components site
            </p>
            <p>Now go build something great.</p>
          </Box>
        </Flex>
      </Container>
    </section>
  </Layout>
)

export default IndexPage
