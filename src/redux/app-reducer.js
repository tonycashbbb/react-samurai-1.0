import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESSFULLY = "SET_INITIALIZED"

const initState = {
  initialized: false
}

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESSFULLY:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}

export const initializedSuccessfully = () => ({type: INITIALIZED_SUCCESSFULLY})

export const initializeApp = () => (dispatch) => {
  const promise = dispatch(getAuthUserData())

  Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccessfully())
    })
}
