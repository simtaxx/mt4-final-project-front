import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5050/api'
})

export const signIn = async (url, params) => {
  try {
    const userData = await api.post(url, params)
    return userData
  } catch (error) {
    return error
  }
}

export const validateEmail = async (url, params) => {
  try {
    const validateEmail = await api.post(url, params)
    return validateEmail
  } catch (error) {
    return error
  }
}

export const fetchChallenges = async (url, options) => {
  try {
    const challenges = await api.get(url, options)
    return challenges
  } catch (error) {
    return error
  }
}
