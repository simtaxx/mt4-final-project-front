import axios from 'axios'

export const getPosts = async (url, params = {}, options) => {
  try {
    return await axios.get(url)
  } catch (error) {
    return error
  }
}

export const signIn = async (url, params, options) => {
  try {
    const userData = await axios.post(url, params, options)
    return userData
  } catch (error) {
    return error
  }
}
