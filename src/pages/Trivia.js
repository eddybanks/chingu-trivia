import React, { useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'

import Header from '../components/layout/Header'
import TriviaCard from '../components/TriviaCard'
import useFetch from '../services/UseFetch'

const quiz_url = 'https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json'

const Trivia = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [scores, setScores] = useState({})
  const { data: fullTriviaList, questionList,  error, loading } = useFetch(quiz_url)

  const next = (scores) => {
    let newIndex = currentItemIndex + 1
    setCurrentItemIndex(newIndex)
    console.log(scores)
  }

  if(error) throw error

  if(loading) return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  )

  return (
    <Container>
      <Header title="Trivia Page" />
      
      {
        questionList[currentItemIndex] ? 
          <TriviaCard 
            trivia={fullTriviaList[questionList[currentItemIndex]]}
            triviaIndex={questionList[currentItemIndex]}
            next={() => next(setCurrentItemIndex, currentItemIndex)}
            scores={scores}
            itemIndex={currentItemIndex}
          /> : "Ended Quiz"
        }
    </Container>
  )
}

export default Trivia