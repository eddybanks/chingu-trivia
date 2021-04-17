import TriviaActionTypes from './TriviaActionTypes'

const INITIAL_STATE = {
  fullTriviaList: null,
  loading: true
}

const triviaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TriviaActionTypes.FETCH_TRIVIA_LIST:
      return {
        ...state,
        fullTriviaList: action.payload
      }
    case TriviaActionTypes.CHANGE_LOADING_STATE:
        return {
          ...state,
          loading: false
        }
    default:
      return state
  }
}

export default triviaReducer