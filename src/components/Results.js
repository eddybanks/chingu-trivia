import React from 'react'
import { Button, Accordion, Card, Col } from 'react-bootstrap'

const Results = ({answeredTrivia, emptyAnswers}) => {

  return (
    <>
    <h3>Your Score is: /10</h3>
      <Accordion defaultActiveKey="0">
        {
          Object.keys(answeredTrivia).map(((triv, idx) => (
            <Card key={`Accordion-results-${idx}`}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={idx+1}>
                  {idx+1}. {answeredTrivia[triv].question}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={idx+1}>
                  <Card.Body>
                    <Col>
                      Selected Answer: {answeredTrivia[triv].selectedAnswer}
                    </Col>
                    <Col>
                      Correct Answer: {answeredTrivia[triv].answer}
                    </Col>
                  </Card.Body>
                </Accordion.Collapse>
              </Card.Header>
            </Card>
          )))
        }
      </Accordion>
      <Button onClick={emptyAnswers}>Restart Quiz</Button>
    </>
  )
}

export default Results
