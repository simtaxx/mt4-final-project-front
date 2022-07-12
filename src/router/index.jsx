import React from 'react'
import { Routes, Route } from 'react-router-dom'

import NeedAuth from './specialsRoutes/NeedAuth'

import Home from '../views/Home'
import Signin from '../views/Signin'
import Challenges from '../views/Challenges'
import Profile from '../views/Profile'
import Stats from '../views/Stats'
import Error from '../views/Error'
import EmailCheck from '../views/EmailCheck'
import Challenge from '../views/Challenge'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/challenges" element={<NeedAuth><Challenges /></NeedAuth>} />
      <Route path="/challenges/:id" element={<NeedAuth><Challenge /></NeedAuth>} />
      <Route path="/profile" element={<NeedAuth><Profile /></NeedAuth>} />
      <Route path="/stats" element={<NeedAuth><Stats /></NeedAuth>} />
      <Route path="/error" element={<Error />} />
      <Route path="/email-check" element={<EmailCheck />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default Router
