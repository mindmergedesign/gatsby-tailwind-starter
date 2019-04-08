import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/Container'

const About = () => (
  <Layout>
    <Container>
      <h1>Hi from the About page</h1>
      <p>Welcome to About</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default About
