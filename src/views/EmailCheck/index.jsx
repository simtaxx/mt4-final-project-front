import React, { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { validateEmail } from '../../api';
import UserContext from '../../contexts/user-context';

const EmailCheck = () => {
  const userContext = useContext(UserContext)
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const navigate = useNavigate()

  useEffect(() => {
    const checkEmail = async () => {
      try {
        const response = await validateEmail('/auth/email-check', { token })
        if (!response?.response?.data?.askForJwt) {
          const { emailChecked } = response.data
          userContext.setUser(prev => ({ ...prev, token, emailChecked }))
          if (emailChecked === 1) {
            navigate('/')
          }
        } else {
          userContext.setUser({ email: ' ' })
          navigate('/signin')
        }
      } catch (error) {
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
    <div>
      <h1 className="text-3xl font-bold">EmailCheck</h1>
    </div>
  );
}

export default EmailCheck
