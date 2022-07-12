import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { fetchChallenges } from '../../api'
import UserContext from '../../contexts/user-context'
import LoadingContext from '../../contexts/loading-context'
import ChallengeCard from './challengeCard'
import './styles.scss'

const Challenges = () => {
  const userContext = useContext(UserContext)
  const loadingContext = useContext(LoadingContext)
  const [challenges, setChallenges] = useState([])
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    getChallenges()
  }, [setChallenges])

  const getChallenges = async () => {
    try {
      loadingContext.setIsLoading(true)
      const userLocal = JSON.parse(localStorage.getItem('user'))
      const options = { headers: { token: `Bearer ${userLocal?.token}` || null } }
      const response = await fetchChallenges('/challenges', options)
      if (!response?.response?.data?.askForJwt) {
        setChallenges(response.data)
        loadingContext.setIsLoading(false)
      } else if (location.pathname === '/challenges') {
        userContext.setUser({ email: ' ' })
        loadingContext.setIsLoading(false)
        navigate('/signin')
      }
    } catch (error) {
      loadingContext.setIsLoading(false)
      console.log(error)
    }
  }

  const challengesList = challenges.map((challenge) => {
    return (
      <ChallengeCard key={challenge.challengeId} challenge={challenge} />
    )
  })

  return (
    <div className='challenges'>
      <h1 className='text-3xl font-bold'>Challenges</h1>
      <div className='challenges__list'>
        {challengesList}
      </div>
    </div>
  )
}

export default Challenges
