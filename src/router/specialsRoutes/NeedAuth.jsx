import React from "react"
import { Navigate } from "react-router-dom"
import PropTypes from 'prop-types'

const NeedAuth = ({ children }) => {
  const isAuth = true
  if (!isAuth) {
    return <Navigate to="/" />
  }
  return children
}

NeedAuth.propTypes = {
  children: PropTypes.element
}

export default NeedAuth
