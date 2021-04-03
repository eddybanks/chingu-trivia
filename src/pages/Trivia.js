import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'

import Header from '../components/Header'
import TriviaCard from '../components/TriviaCard'
import { changeLoadingState, fetchTriviaList } from '../redux/trivia/TriviaActions'

const quiz_url = 'https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json'

const next = (setCurrentItemIndex, currentItemIndex, scores) => {
  setCurrentItemIndex(currentItemIndex + 1)
  console.log(scores)
}

// randomizeIndices takes an array and creates a new array of randomized indices of the first array
const randomizeIndices = (arr, maxLength=10) => {
  const arrLength = arr.length
  // create a shuffled array of numbers between 0 and arrLength
  const tmpArray = [...Array(arrLength).keys() ].map( i => i+1).sort(() => Math.random() - 0.5)

  // return new array with the first n elements where n=maxLength
  return tmpArray.slice(0,maxLength)
}

// randomizeQuestions chooses a random list of indices to be used to randomize the trivia questions
const randomizeQuestions = (setQuestionList, fullTriviaList) => {
  const newArray = randomizeIndices(fullTriviaList)
  setQuestionList(newArray)
}

const calculateScores = () => {

}

const Trivia = ({ fullTriviaList, fetchTriviaList, loading, changeLoadingState }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [questionList, setQuestionList] = useState({})
  const [scores, setScores] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    async function init() {
      try {
        const response = await axios.get(quiz_url)
        fetchTriviaList(response.data)
        randomizeQuestions(setQuestionList, response.data)
      } catch (e) {
        setError(e)
      } finally {
        changeLoadingState()
      }
    }
    init()
  }, [])

  if(error) return;
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

const mapStateToProps = state => ({
  fullTriviaList: state.trivia.fullTriviaList,
  loading: state.trivia.loading
})

const mapDispatchToProps = dispatch => ({
  fetchTriviaList: trivia => dispatch(fetchTriviaList(trivia)),
  changeLoadingState: () => dispatch(changeLoadingState())
})

export default connect(mapStateToProps, mapDispatchToProps)(Trivia)
