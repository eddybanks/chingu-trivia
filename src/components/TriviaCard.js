import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap'

const TriviaCard = ({ question, choices, next }) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Subtitle>
          <p>Question</p>
        </Card.Subtitle>
        <Card.Title>
          <h4>{question}</h4>
        </Card.Title>
        <Row>
          {
            Object.keys(choices).map((choiceKey, idx) => (
              <Col md={6} key={`trivia-choice-${idx}`}>
                <Button 
                  className="mt-2" 
                  variant="outline-secondary"
                  size="lg"
                >
                  {choiceKey}: {choices[choiceKey]}
                </Button>
              </Col>
            ))
          }
        </Row>
        <Button onClick={next}>
          Next
        </Button>
      </Card.Body>
    </Card>
  )
}

export default TriviaCard
