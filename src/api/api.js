import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "6dff8400-1da8-4b7d-ac6e-8ae941076ee7"
  },
})

export const getUsersAPI = (currentPage = 1, pageSize = 10) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then(res => res.data)
}

export const followAPI = (userId) => {
  return instance
    .post(`follow/${userId}`)
    .then(res => res.data)
}

export const unfollowAPI = (userId) => {
  return instance
    .delete(`follow/${userId}`)
    .then(res => res.data)
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status})
  },
  savePhoto(photo) {
    const formData = new FormData()
    formData.append("image", photo)

    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': "multipart/form-data"
      }
    })
  },
  saveProfile(profileData) {
    return instance.put(`profile`, profileData)
  },
}

export const authAPI = {
  me() {
    return instance
      .get(`auth/me`)
      .then(res => res.data)
  },
  login(email, password, rememberMe = false) {
    return instance
      .post(`auth/login`, {email, password, rememberMe})
  },
  logout() {
    return instance
      .delete(`auth/login`)
  }
}
