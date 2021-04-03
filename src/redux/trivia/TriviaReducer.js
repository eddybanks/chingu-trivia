const INITIAL_STATE = {
  fullTriviaList: null,
  loading: true
}

const triviaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_TRIVIA_LIST':
      return {
        ...state,
        fullTriviaList: action.payload
      }
    case 'CHANGE_LOADING_STATE':
        return {
          ...state,
          loading: false
        }
    default:
      return state
  }
}

export default triviaReducer