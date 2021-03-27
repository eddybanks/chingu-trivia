import React, { useState } from 'react'
import { Button, Card, Row, Col, Container } from 'react-bootstrap'

const selectAnswer = (e, selectedAnswer, setSelectedAnswer) => {
  setSelectedAnswer(e.target.value)
  console.log(selectedAnswer)
}

const submitScore = (selectedAnswer, triviaIndex, scores, setScores, next) => {
  let tmpScore = {}
  tmpScore[triviaIndex] = selectedAnswer
  setScores({
    ...scores,
    ...tmpScore
  })
  console.log(JSON.stringify(scores) + " okay")
  next()
}

const TriviaCard = ({ trivia: {question, choices}, triviaIndex, next, itemIndex }) => {
  const [scores, setScores] = useState({})
  const [selectedAnswer, setSelectedAnswer] = useState("")

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
                    onClick={e => selectAnswer(e, selectedAnswer, setSelectedAnswer)}
                  >
                    {choiceKey}: {choices[choiceKey]}
                  </Button>
                </Col>
              ))
            }
          </Row>
          <Row>
            <Col className="text-center mt-2">
              <Button variant="secondary" onClick={() => submitScore(selectedAnswer, triviaIndex, scores, setScores, next)}>
                Next
              </Button>
            </Col>
          </Row>
          <p>{selectedAnswer}</p>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default TriviaCard
