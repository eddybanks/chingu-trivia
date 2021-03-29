import { combineReducers } from 'redux'

import triviaReducer from './trivia/TriviaReducer'

export default combineReducers({
  trivia: triviaReducer
})