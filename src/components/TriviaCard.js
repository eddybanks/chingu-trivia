import React, { useState } from "react";
import { Button, Container, Card, Row, Col, Form } from "react-bootstrap";

const TriviaCard = ({ trivia: { question, choices }, next, itemIndex }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    selectedAnswer && next(selectedAnswer);
    setSelectedAnswer("");
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setSelectedAnswer(e.target.value);
  };

  return (
    <Card>
      <Card.Header>Question {itemIndex + 1}/10</Card.Header>
      <Card.Body className="text-center">
        <Form onSubmit={handleSubmit}>
          <Card.Title>
            <h4>{question}</h4>
          </Card.Title>
          <Container>
            <Row className="mt-5">
              {Object.keys(choices).map((choiceKey, idx) => (
                <Col md={6} key={`trivia-choice-${idx}`} className="mb-2">
                  <Button
                    type="radio"
                    variant="secondary"
                    name="selectedAnswer"
                    value={choiceKey}
                    checked={selectedAnswer === choiceKey}
                    onClick={(e) => handleSelect(e)}
                  >
                    {choiceKey}: {choices[choiceKey]}
                  </Button>
                </Col>
              ))}
            </Row>
            <Row>
              <Col className="text-center mt-2">
                <Button variant="secondary" type="submit">
                  Next
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TriviaCard;
