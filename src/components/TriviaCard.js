import React, { useState } from 'react'
import { Button, Container, Card, Row, Col, Form } from 'react-bootstrap'
import { connect } from 'react-redux'

const TriviaCard = ({ trivia: {question, choices}, next, itemIndex }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    next(selectedAnswer)
    setSelectedAnswer("")
  }

  return (
    <Card>
      <Card.Header>
        Question {itemIndex + 1}/10
      </Card.Header>
      <Card.Body className="text-center">
        <Form onSubmit={handleSubmit}>
          <Card.Title>
            <h4>{question}</h4>
          </Card.Title>
          <Container>
            <Row className="mt-5">
                {/* {
                  Object.keys(choices).map((choiceKey, idx) => (
                    <Col md={6} key={`trivia-choice-${idx}`} className="mb-2">
                      <Button 
                        key={`${idx}-radio-buttons`}
                        className="mt-2" 
                        variant="light"
                        block
                        style={{fontSize: "0.9em"}}
                        size="lg"
                        name="selectedAnswer"
                        type="radio"
                        value={choiceKey}
                        checked={selectedAnswer === choiceKey}
                        onChange={e => setSelectedAnswer(e.target.value)}
                      >
                        {choiceKey}: {choices[choiceKey]}
                      </Button>
                    </Col>
                  ))
                } */}
              {
                Object.keys(choices).map((choiceKey, idx) => (
                  <Form.Check
                    key={choiceKey}
                    type="radio"
                    name="selectedAnswer"
                    value={choiceKey}
                    checked={selectedAnswer === choiceKey}
                    onChange={e => setSelectedAnswer(e.target.value)}
                    label={`${choiceKey}: ${choices[choiceKey]}`}
                  />
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
