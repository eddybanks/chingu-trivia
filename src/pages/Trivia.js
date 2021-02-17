import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import TriviaCard from '../components/TriviaCard'

const randomItemIndex = (triviaList, setCurrentItemIndex) => {
  setCurrentItemIndex(Math.floor(Math.random() * Object.keys(triviaList).length))
  console.log('Call changeItemIndex function')
}
const quiz_url = 'https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json'

const gradeQuiz = (score, setScore) => {
  
}
const Trivia = () => {
  const [quizItems, setQuizItems] = useState({
    triviaList: {},
    currentItem: {}
  })
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [gradeQuestion, setGradeQuestion] = useState(false)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    console.log('useEffect function')
    axios.get(quiz_url)
      .then((res) => {
        setQuizItems({triviaList: res.data})
        setLoading(true)
        randomItemIndex(quizItems.triviaList, setCurrentItemIndex)
      })
      .catch(err => {
        console.log(err)
      })
  }, [loading])

  return (
    <Container>
      <h1>Trivia Page</h1>
      {loading ? <TriviaCard 
        question={quizItems.triviaList[currentItemIndex].question} 
        choices={quizItems.triviaList[currentItemIndex].choices}
        next={() => randomItemIndex(quizItems.triviaList, setCurrentItemIndex)} /> : ''}
    </Container>
  )
}

export default Trivia
