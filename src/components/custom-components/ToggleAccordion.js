import React from 'react'
import { Accordion, Card } from 'react-bootstrap'

import ContextAwareToggle from './ContextAwareToggle'

const ToggleAccordion = ({ question, selectedAnswer, answer}) => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey="0">{question}</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default ToggleAccordion
