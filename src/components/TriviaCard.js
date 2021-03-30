import React, { useState } from 'react'
import { Button, Container, Card, Form } from 'react-bootstrap'

const TriviaCard = ({ trivia: {question, choices}, triviaIndex, next, itemIndex }) => {

  return (
    <Card>
      <Card.Header>
        Question {itemIndex + 1}/10
      </Card.Header>
      <Card.Body className="text-center">
        <Card.Title>
          <h4>{question}</h4>
        </Card.Title>
        <Container>
          {choices.map((idx, choice) => {
            <Button>
              {choice}
            </Button>
          })}
        </Container>
      </Card.Body>
    </Card>
  )
}

export default TriviaCard
