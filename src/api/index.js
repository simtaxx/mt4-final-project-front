import axios from 'axios'

const userLocal = JSON.parse(localStorage.getItem('user'))

const api = axios.create({
  baseURL: 'http://localhost:5050/api',
  headers: { token: `Bearer ${userLocal?.token}` || null }
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
