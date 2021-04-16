import React from 'react'
import { Button } from 'react-bootstrap'

const Results = ({selectedAnswers, emptyAnswers}) => {
  return (
    <>
      {
        Object.keys(selectedAnswers).map(s => (
          <p key={`${s}`}>{parseInt(s) + 1}: {JSON.stringify(selectedAnswers[s])}</p>
        ))
      }
      <Button onClick={emptyAnswers}>Restart Quiz</Button>
    </>
  )
}

export default Results
