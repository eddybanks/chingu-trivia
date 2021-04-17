import React, { useState } from 'react'
import { Container, Card, Form } from 'react-bootstrap'
import Header from './layout/Header'

const TriviaCardMin = () => {
  const [question, setQuestion] = useState("")

  const testQuestion = {
    id: 1,
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
            <Form>
              <Card.Title>
                <h3>{testQuestion.question}</h3>
              </Card.Title>
              <div>
              {
                Object.keys(testQuestion.choices).map((choiceKey, idx) => (
                  <Form.Check 
                    key={choiceKey}
                    type="radio"
                    name="question"
                    value={choiceKey}
                    checked={question === choiceKey}
                    onChange={e => setQuestion(e.target.value)}
                    label={`${choiceKey}: ${testQuestion.choices[choiceKey]}`}
                  />
                ))
              }
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default TriviaCardMin
