import React, { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { validateEmail } from '../../api';
import UserContext from '../../contexts/user-context';
import LoadingContext from '../../contexts/loading-context'

const EmailCheck = () => {
  const userContext = useContext(UserContext)
  const loadingContext = useContext(LoadingContext)
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const navigate = useNavigate()

  useEffect(() => {
    const checkEmail = async () => {
      try {
        loadingContext.setIsLoading(true)
        const response = await validateEmail('/auth/email-check', { token })
        if (!response?.response?.data?.askForJwt) {
          const { emailChecked } = response.data
          userContext.setUser(prev => ({ ...prev, token, emailChecked }))
          if (emailChecked === 1) {
            loadingContext.setIsLoading(false)
            navigate('/')
          }
          loadingContext.setIsLoading(false)
        } else {
          userContext.setUser({ email: ' ' })
          loadingContext.setIsLoading(false)
          navigate('/signin')
        }
      } catch (error) {
        loadingContext.setIsLoading(false)
        return false
      }
    }
    if (token) {
      checkEmail()
    } else if (!token && location.pathname === 'email-check') {
      navigate('/')
    }
  }, [])

  return (
    <div className="flex flex-col mt-12">
    <div className="container min-w-20 max-w-max mx-auto flex-1 flex flex-col items-center px-2">
      <div className="bg-gray-700 px-6 py-8 rounded shadow-m w-full">
        <h1 className="mt-8 mb-8 text-3xl text-center">Un magic link t&apos;a été envoyé !</h1>
      </div>
    </div>
  </div>
  );
}

export default EmailCheck
