import React from 'react'
import { Button, Accordion } from 'react-bootstrap'

const Results = ({selectedAnswers, emptyAnswers, questions}) => {
  return (
    <>
      {
        Object.keys(selectedAnswers).map(s => (
          <p key={`${s}`}>{parseInt(s) + 1}: {selectedAnswers[s]}</p>
        ))
      }
      <p>{JSON.stringify(questions)}</p>
      <Accordion defaultActiveKey="0">
        {
          // Object.keys(selectedAnswers).map()
        }
      </Accordion>
      <Button onClick={emptyAnswers}>Restart Quiz</Button>
    </>
  )
}

export default Results
