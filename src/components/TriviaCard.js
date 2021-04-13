import React, { useState } from 'react'
import { Button, Container, Card, Row, Col, Form } from 'react-bootstrap'
import { connect } from 'react-redux'

const TriviaCard = ({ trivia: {question, choices}, triviaIndex, next, itemIndex }) => {
  const [currentQuestion, setCurrentQuestion] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <Card>
      <Card.Header>
        Question {itemIndex + 1}/10
      </Card.Header>
      <Card.Body className="text-center">
        <Form  onSubmit={handleSubmit}>
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
                        block
                        style={{fontSize: "0.9em"}}
                        value={choiceKey.value}
                        checked={currentQuestion === choiceKey.value}
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
                <Button variant="secondary" type="submit">
                  Next
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </Card.Body>
    </Card>
  )
}

const mapStateToProps = state => ({
  score: state.score
})

export default connect(mapStateToProps)(TriviaCard)
