import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/Container'

const Contact = () => (
  <Layout>
    <Container>
      <h1>Hi from the Contact page</h1>
      <p>Welcome to Contact</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default Contact
