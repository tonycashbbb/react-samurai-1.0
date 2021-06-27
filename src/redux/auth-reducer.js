import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_USER_PHOTO = 'SET_USER_PHOTO'

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuthorised: false,
  userPhoto: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    case SET_USER_PHOTO:
      return {
        ...state,
        userPhoto: action.userPhoto
      }
    default:
      return state
  }
}

export const setAuthUserData = (userId, email, login, isAuthorised) => ({
  type: SET_AUTH_USER_DATA,
  payload: {userId, email, login, isAuthorised}
})
export const setUserPhoto = (userPhoto) => ({type: SET_USER_PHOTO, userPhoto})

export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.me()

  if (response.resultCode === 0) {
    const {id, email, login} = response.data
    dispatch(setAuthUserData(id, email, login, true))

    const res = await profileAPI.getProfile(id)
    dispatch(setUserPhoto(res.data.photos.small))
  }
  return response
}
export const login = (login, password, rememberMe) => async (dispatch) => {
  const res = await authAPI.login(login, password, rememberMe)

  if (res.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    dispatch(stopSubmit("login", {_error: res.data.messages[0]}))
  }
}
export const logout = () => async (dispatch) => {
  const res = await authAPI.logout()

  if (res.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}
