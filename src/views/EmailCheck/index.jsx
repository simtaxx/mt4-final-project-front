import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { validateEmail } from '../../api';
import UserContext from '../../contexts/user-context';

const EmailCheck = () => {
  const userContext = useContext(UserContext)
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const navigate = useNavigate()

  useEffect(() => {
    const checkEmail = async () => {
      try {
        const { response } = await validateEmail('/auth/email-check', { token })
        const { emailChecked, askForJwt } = response.data
        if (!askForJwt) {
          userContext.setUser(prev => ({ ...prev, token, emailChecked }))
          const userLocal = JSON.parse(localStorage.getItem('user'))
          if (userLocal.emailChecked) {
            navigate('/challenges')
          }
        } else {
          userContext.setUser({email: ' ', token: ' '})
          navigate('/signin')
        }
      } catch (error) {
        return false
      }
    }
    if (token) {
      checkEmail()
    } else {
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
