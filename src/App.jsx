import React, { useEffect, useState } from 'react';
import Router from './router';

import Header from './components/header'
import Loader from './components/loader'
import UserContext from './contexts/user-context';
import LoadingContext from './contexts/loading-context'

const App = () => {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (user.email) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      const userLocal = JSON.parse(localStorage.getItem('user'))
      if (userLocal) setUser({ ...userLocal })
    }
  }, [user])

  return (
    <div>
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
          <Router />
          { isLoading ? <Loader /> : false}
        </UserContext.Provider>
      </LoadingContext.Provider>
    </div>
  );
}

export default App
