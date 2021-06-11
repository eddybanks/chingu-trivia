import React from "react";
import { Container } from "react-bootstrap";

import Header from "../components/layout/Header";

const About = () => {
  return (
    <Container>
      <Header title="About" />
      <section className="text-center mt-5">
        <p>A simple trivia app to explore basic react functionality!</p>
      </section>
    </Container>
  );
};

export default About;
