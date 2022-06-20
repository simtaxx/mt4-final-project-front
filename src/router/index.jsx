import { Routes, Route } from 'react-router-dom'

import Home from '../views/Home'
import Signin from '../views/Signin'
import Signup from '../views/Signup'
import Profile from '../views/Profile'
import Stats from '../views/Stats'

const Router = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
)

export default Router
