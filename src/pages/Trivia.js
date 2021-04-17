import React, { useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'

import Header from '../components/layout/Header'
import Results from '../components/Results'
import TriviaCard from '../components/TriviaCard'
import useFetch from '../services/UseFetch'

const quiz_url = 'https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json'

const Trivia = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState(null)
  const { data: fullTriviaList, questionList,  error, loading } = useFetch(quiz_url)

  const next = (selectedAnswer) => {
    let newIndex = currentItemIndex + 1
    let newSelectedAnswer = {}
    newSelectedAnswer[currentItemIndex] = selectedAnswer
    setSelectedAnswers({...selectedAnswers, ...newSelectedAnswer})
    setCurrentItemIndex(newIndex)
  }

  const emptyAnswers = () => {
    const newAnswers = {}
    setSelectedAnswers(newAnswers)
    setCurrentItemIndex(0)
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
            next={next}
            itemIndex={currentItemIndex}
          /> : 
          <Results 
            questions={fullTriviaList[questionList]}
            selectedAnswers={selectedAnswers}
            emptyAnswers={emptyAnswers}
          />
        }
    </Container>
  )
}

export default Trivia