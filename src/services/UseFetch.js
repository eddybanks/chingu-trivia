import { useState, useEffect } from "react"
import axios from 'axios'


// randomizeIndices takes an array and creates a new array of randomized indices of the first array
const randomizeIndices = (arr, maxLength=10) => {
  const maxIndex = arr.length - 1
  // create a shuffled array of numbers between 0 and arrLength
  const tmpArray = [...Array(maxIndex).keys() ].map( i => i+1).sort(() => Math.random() - 0.5)

  // return new array with the first n elements where n=maxLength
  return tmpArray.slice(0,maxLength)
}

// randomizeQuestions chooses a random list of indices to be used to randomize the trivia questions
const randomizeQuestions = (setQuestionList, fullTriviaList) => {
  const newArray = randomizeIndices(fullTriviaList)
  setQuestionList(newArray)
}

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [questionList, setQuestionList] = useState(null)

  useEffect(() => {
    async function init() {
      try {
        const res = await axios.get(url)
        setData(res.data)
        randomizeQuestions(setQuestionList, res.data)
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    }
    init()
  }, [url])

  return { data, questionList, error, loading }
}