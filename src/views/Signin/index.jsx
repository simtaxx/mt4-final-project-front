import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../api';
import UserContext from '../../contexts/user-context';
import LoadingContext from '../../contexts/loading-context'

const Signin = () => {
  const userContext = useContext(UserContext)
  const loadingContext = useContext(LoadingContext)
  const [formEmail, setEmail] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem('user'))
    if (userLocal?.emailChecked) {
      navigate('/challenges')
    }
  }, [])

  const handleClick = async () => {
    loadingContext.setIsLoading(true)
    const params = { email: formEmail }
    const signUser = await signIn('/auth/user', params)
    const { email, emailChecked, token } = signUser.data
    userContext.setUser({ email, token: token || null, emailChecked })
    loadingContext.setIsLoading(false)
    return !emailChecked || !token ? navigate('/email-check') : navigate('/challenges')
  }

  return (
    <div className="flex flex-col mt-20">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center px-2">
        <div className="bg-gray-700 px-6 py-8 rounded shadow-m w-full">
          <h1 className="mb-8 text-3xl text-center">Connecte toi avec ton mail HETIC</h1>
          <input 
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 text-black"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleClick}
            type="submit"
            className="w-full text-center py-3 rounded bg-white text-black hover:bg-green-400 focus:outline-none my-1"
          >
            Connecte toi
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin
