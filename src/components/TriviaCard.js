import React, { useState } from 'react'
import { Button, Container, Card, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

const TriviaCard = ({ trivia: {question, choices}, triviaIndex, next, itemIndex }) => {
  const [currentQuestion, setCurrentQuestion] = useState("")

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
                      key={`${idx}-radio-buttons`}
                      className="mt-2" 
                      variant="light"
                      size="lg"
                      name={triviaIndex}
                      type="radio"
                      value={choiceKey.value}
                      checked={currentQuestion === choiceKey.value}
                      block
                      style={{fontSize: "0.9em"}}
                      onChange={e => setCurrentQuestion(e.target.value)}
                    >
                      {choiceKey}: {choices[choiceKey]}
                    </Button>
                  </Col>
                ))
              }
            </Row>
            <Row>
            <Col className="text-center mt-2">
              <Button variant="secondary" onClick={next}>
                Next
              </Button>
              {JSON.stringify(currentQuestion)}
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

const mapStateToProps = state => ({
  score: state.score
})

export default connect(mapStateToProps)(TriviaCard)
