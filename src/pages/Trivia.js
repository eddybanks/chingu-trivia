import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import Header from '../components/Header'
import TriviaCard from '../components/TriviaCard'

const quiz_url = 'https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json'

const next = (setCurrentItemIndex, currentItemIndex, scores) => {
  setCurrentItemIndex(currentItemIndex + 1)
  console.log(scores)
}

const randomizeQuestions = (setQuestionList, fullTriviaList) => {
  const length = fullTriviaList.length
  // shuffle array of questions into tmpArray
  let tmpArray = [...Array(length).keys() ].map( i => i+1).sort(() => Math.random() - 0.5)
  
  // Choose 10 questions out of tmpArray for the new list of questions
  const newArray = tmpArray.slice(0,10)
  console.log(newArray)
  setQuestionList(newArray)
}

const Trivia = () => {
  const [fullTriviaList, setFullTriviaList] = useState({})
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [questionList, setQuestionList] = useState([])
  const [scores, setScores] = useState({})
  const [loading, setLoading] = useState(false)

  // const { id, question, topic, choices, answer } = fullTriviaList[questionList[currentItemIndex]] 

  useEffect(() => {
    console.log('useEffect function')
    axios.get(quiz_url)
      .then((res) => {
        setFullTriviaList(res.data)
        randomizeQuestions(setQuestionList, res.data)
        setLoading(true)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Container>
      <Header title="Trivia Page" />
      {console.log(questionList, questionList[currentItemIndex], fullTriviaList[questionList[currentItemIndex]])}
      {loading ?
        questionList[currentItemIndex] ? <TriviaCard 
          trivia={fullTriviaList[questionList[currentItemIndex]]}
          triviaIndex={questionList[currentItemIndex]}
          next={() => next(setCurrentItemIndex, currentItemIndex)}
          scores={scores}
          setScores={setScores} 
          itemIndex={currentItemIndex}
        /> : "Ended Quiz" : 
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>}
    </Container>
  )
}

export default Trivia
