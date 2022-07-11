import React, { useContext,useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchChallenges } from '../../api';
import UserContext from '../../contexts/user-context';

const Challenges = () => {
  const userContext = useContext(UserContext)
  const [challenges, setChallenges] = useState([])
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    getChallenges()
  }, [])

  const getChallenges = async () => {
    try {
      const userLocal = JSON.parse(localStorage.getItem('user'))
      const options = { headers: { token: `Bearer ${userLocal?.token}` || null } }
      const response = await fetchChallenges('/challenges', options)
      if (!response?.response?.data?.askForJwt) {
        setChallenges(response.data)
      } else if (location.pathname === '/challenges') {
        userContext.setUser({ email: ' ' })
        navigate('/signin')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1 className='text-3xl font-bold'>Challenges</h1>
    </div>
  );
}

export default Challenges
