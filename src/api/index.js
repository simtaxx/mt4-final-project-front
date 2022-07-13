import axios from 'axios'
//https://final-project-cloud.herokuapp.com/api

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

export const fetchCurrentChallenge = async (url, options) => {
  try {
    const challenge = await api.get(url, options)
    return challenge
  } catch (error) {
    return error
  }
}

export const sendUserChallengeInformations = async (url, params, options) => {
  try {
    const userResponse = await api.post(url, params, options)
    return userResponse
  } catch (error) {
    return error
  }
}

export const checkUserConnections = async (url, options) => {
  try {
    const userResponse = await api.get(url, options)
    return userResponse
  } catch (error) {
    return error
  }
}

export const checkQuestions = async (url, options) => {
  try {
    const response = await api.get(url, options)
    return response
  } catch (error) {
    return error
  }
}
