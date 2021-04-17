import React from 'react'
import { Container } from 'react-bootstrap'

import Header from '../components/layout/Header'

const About = () => {
  return (
    <Container>
      <Header title="About Us" />
      <section>
        <p>This is the about us page!</p>
      </section>
    </Container>
  )
}

export default About