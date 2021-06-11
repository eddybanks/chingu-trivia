import React from "react";
import { Button, Accordion, Card, Row, Col } from "react-bootstrap";

const Results = ({ answeredTrivia, emptyAnswers, score }) => {
  return (
    <>
      <h3>Your Score is: {score}/10</h3>
      <Accordion defaultActiveKey="0">
        {Object.keys(answeredTrivia).map((triv, idx) => (
          <Card key={`Accordion-results-${idx}`}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={idx + 1}>
                {idx + 1}. {answeredTrivia[triv].question}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={idx + 1}>
                <Card.Body>
                  <Row>
                    <Col md={3}>
                      Selected Answer: {answeredTrivia[triv].selectedAnswer}
                    </Col>
                    <Col>
                      {
                        answeredTrivia[triv].choices[
                          answeredTrivia[triv].selectedAnswer
                        ]
                      }
                    </Col>
                  </Row>
                  <hr />
                  <Row className="mt-2">
                    <Col md={3}>
                      Correct Answer: {answeredTrivia[triv].answer}
                    </Col>
                    <Col>
                      {
                        answeredTrivia[triv].choices[
                          answeredTrivia[triv].answer
                        ]
                      }
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card.Header>
          </Card>
        ))}
      </Accordion>
      <Button onClick={emptyAnswers}>Restart Quiz</Button>
    </>
  );
};

export default Results;
