import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import Header from '../components/Header'
import TriviaCard from '../components/TriviaCard'

const quiz_url = 'https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json'

const next = (setCurrentItemIndex, currentItemIndex) => {
  setCurrentItemIndex(currentItemIndex + 1)
  console.log(currentItemIndex)
}

const randomizeQuestions = (setQuestionList,questionList, triviaList) => {
  const length = triviaList.length
  // shuffle array of questions into tmpArray
  let tmpArray = [...Array(length).keys() ].map( i => i+1).sort(() => Math.random() - 0.5)
  
  // Choose 10 questions out of tmpArray for the new list of questions
  const newArray = tmpArray.slice(0,10)
  console.log(newArray)
}

const Trivia = () => {
  const [quizItems, setQuizItems] = useState({
    triviaList: {},
    currentItem: {}
  })
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [questionList, setQuestionList] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('useEffect function')
    axios.get(quiz_url)
      .then((res) => {
        setQuizItems({triviaList: res.data})
        setLoading(true)
        randomizeQuestions(setQuestionList,questionList, res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Container>
      <Header title="Trivia Page" />
      {loading ?
        <TriviaCard 
          question={quizItems.triviaList[currentItemIndex].question} 
          choices={quizItems.triviaList[currentItemIndex].choices}
          next={() => next(setCurrentItemIndex, currentItemIndex)} 
        /> : 
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>}
    </Container>
  )
}

export default Trivia
