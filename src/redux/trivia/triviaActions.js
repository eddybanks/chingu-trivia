export const fetchTriviaList = fullTriviaList => ({
  type: 'FETCH_TRIVIA_LIST',
  payload: fullTriviaList
})

export const changeLoadingState = () => ({
  type: 'CHANGE_LOADING_STATE'
})