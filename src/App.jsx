import React, { useEffect, useState } from 'react';
import Router from './router';

import Header from './components/header'
import UserContext from './contexts/user-context';

const App = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    if (user.token) {
      localStorage.setItem('user', JSON.stringify(user))
    }
  }, [user])

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Router />
      </UserContext.Provider>
    </div>
  );
}

export default App
