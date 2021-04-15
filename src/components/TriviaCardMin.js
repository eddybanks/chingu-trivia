import React, { useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import Header from './layout/Header'

const TriviaCardMin = () => {
  const [question, setQuestion] = useState("")
  const [selectedAnswer, setSelectedAnswer] = useState("")

  const testQuestion = {
    question: 'Who am I?',
    choices: {
      a: 'An elephant',
      b: 'Edwin',
      c: 'Ho ho ho! Merry Christmas',
      d: "Don't know! Don't care!"
    },
    answer: 'b'
  }

  return (
    <>
      <Container>
        <Header title="Trivia Card Practice" />
        <Card>
          <Card.Header>
            Question 1/10
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <h3>{testQuestion.question}</h3>
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default TriviaCardMin
