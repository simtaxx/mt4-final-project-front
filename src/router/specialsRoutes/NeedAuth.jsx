import React from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const NeedAuth = ({ children }) => {
  const checkAuth = () => {
    if (!localStorage.getItem('user')) return { isAuth: false, route: '/signin' }
    const { email, emailChecked, token } = JSON.parse(localStorage.getItem('user'))
    if (!email || email === ' ') {
      return { isAuth: false, route: '/signin' }
    } else if (!emailChecked || !token) {
      return { isAuth: false, route: '/email-check' }
    } else {
      return { isAuth: true, route: '/challenges' }
    }
  }

  const { isAuth, route } = checkAuth()

  if (!isAuth) {
    return <Navigate to={route} />
  }
  return children
}

NeedAuth.propTypes = {
  children: PropTypes.element
}

export default NeedAuth
