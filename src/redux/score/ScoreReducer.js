import { ScoreActionTypes } from './ScoreActionTypes'

const INITIAL_STATE = {
  score: null
}

const scoreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ScoreActionTypes.SET_SCORE:
      return {
        ...state,
        score: action.payload
      }
    default:
      return state
  }
}

export default scoreReducer