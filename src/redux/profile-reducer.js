import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS'

const initState = {
  posts: [
    {id: 1, text: 'qq', likesCount: 1},
    {id: 2, text: 'bb', likesCount: 3},
    {id: 3, text: 'pes', likesCount: 2},
  ],
  postId: 4,
  userProfile: null,
  userStatus: null,
}

export const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: state.postId, text: action.postBody, likesCount: 0}],
        postId: ++state.postId,
        newPostText: ''
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile
      }
    case SET_USER_STATUS: {
      return {
        ...state,
        userStatus: action.userStatus
      }
    }
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        userProfile: {...state.userProfile, photos: action.photos}
      }
    case SAVE_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: {photos: state.userProfile.photos, ...action.profileData}
      }
    default:
      return state;
  }
}

export const addPost = (postBody) => ({type: ADD_POST, postBody})
const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
const setUserStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus})
const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
const saveProfileSuccess = (profileData) => ({type: SAVE_PROFILE_SUCCESS, profileData})

export const getProfile = (id = 2) => async (dispatch) => {
  const res = await profileAPI.getProfile(id)
  dispatch(setUserProfile(res.data))
}

export const getStatus = (id) => async (dispatch) => {
  const res = await profileAPI.getStatus(id)
  dispatch(setUserStatus(res.data))
}

export const updateStatus = (status) => async (dispatch) => {
  const res = await profileAPI.updateStatus(status)

  if (res.data.resultCode === 0) {
    dispatch(savePhotoSuccess(status))
  }
}

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file)

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}

export const saveProfile = (profileData) => async (dispatch) => {
  const response = await profileAPI.saveProfile(profileData)

  if (response.data.resultCode === 0) {
    dispatch(saveProfileSuccess(profileData))
  } else {
    dispatch(stopSubmit("editProfile", {_error: response.data.messages[0]}))
    return Promise.reject(response.data.messages[0])
  }
}
