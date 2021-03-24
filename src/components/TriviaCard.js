import React from 'react'
import { Button, Card, Row, Col, Container } from 'react-bootstrap'

const TriviaCard = ({ question, choices, next }) => {
  return (
    <Card>
      <Card.Header>
        Question
      </Card.Header>
      <Card.Body className="text-center">
        <Card.Title>
          <h4>{question}</h4>
        </Card.Title>
        <Container>
          <Row className="mt-5">
            {
              Object.keys(choices).map((choiceKey, idx) => (
                <Col md={6} key={`trivia-choice-${idx}`} className="mb-2">
                  <Button 
                    className="mt-2" 
                    variant="light"
                    size="lg"
                    value={choiceKey}
                    selected={true}
                    block
                    style={{fontSize: "0.9em"}}
                    onClick={e => console.log(e.target.value)}
                  >
                    {choiceKey}: {choices[choiceKey]}
                  </Button>
                </Col>
              ))
            }
          </Row>
          <Row>
            <Col className="text-center mt-2">
              <Button onClick={next} variant="secondary">
                Next
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default TriviaCard
