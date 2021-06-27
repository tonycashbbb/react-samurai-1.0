const SET_PORTION_NUMBER = 'SET_PORTION_NUMBER'

const initState = {
  portionNumber: 1,
}

export const paginationReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PORTION_NUMBER:
      return {
        ...state,
        portionNumber: action.portionNumber
      }
    default:
      return state
  }
}
export const setPortionNumber = (portionNumber) => ({type: SET_PORTION_NUMBER, portionNumber})
