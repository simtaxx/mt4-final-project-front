import axios from 'axios'

export const getPosts = async (url) => {
  try {
    return await axios.get(url)
  } catch (error) {
    return error
  }
}