const INITIAL_STATE = {
  fullTriviaList: null
}

const triviaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_TRIVIA_LIST':
      return {
        ...state,
        fullTriviaList: action.payload
      }
    default:
      return state
  }
}

export default triviaReducer