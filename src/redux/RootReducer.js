import { combineReducers } from 'redux'
import scoreReducer from './score/ScoreReducer'

import triviaReducer from './trivia/TriviaReducer'

export default combineReducers({
  trivia: triviaReducer,
  score: scoreReducer
})