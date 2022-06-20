import React from 'react'
import { Routes, Route } from 'react-router-dom'

import NeedAuth from './specialsRoutes/NeedAuth'

import Home from '../views/Home'
import Signin from '../views/Signin'
import Signup from '../views/Signup'
import Challenges from '../views/Challenges'
import Profile from '../views/Profile'
import Stats from '../views/Stats'
import Error from '../views/Error'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/challenges" element={<NeedAuth><Challenges /></NeedAuth>} />
      <Route path="/profile" element={<NeedAuth><Profile /></NeedAuth>} />
      <Route path="/stats" element={<NeedAuth><Stats /></NeedAuth>} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default Router
