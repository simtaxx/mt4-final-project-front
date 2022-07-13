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

  // useEffect(() => {
  //   setChallenges([{ challengeId: 1, challengeName: 'Mdr challenge', challengeDescription: 'Un challenge de fou zinzin', score: 20 }, { challengeId: 2, challengeName: 'xptdr challenge', challengeDescription: 'Sah tema le challenge', score: 8 }, { challengeId: 3, challengeName: 'AHAHAH challenge', challengeDescription: 'Sah tema le challenge', score: 12 }, { challengeId: 4, challengeName: 'LOL challenge', challengeDescription: 'Sah tema le challenge', score: 0 }, { challengeId: 2, challengeName: 'ccbb challenge', challengeDescription: 'Sah tema le challenge', score: 20 }])
  // }, [setChallenges])

  const challengesList = challenges.map((challenge) => {
    return (
      <div key={challenge.challengeId} className='challenges__container'>
        <ChallengeCard key={challenge.challengeId} challenge={challenge} />
      </div>
    )
  })

  return (
    <div className='challenges flex flex-col gap-1 mt-12'>
      <h1 className='text-3xl mb-14 font-bold'>Challenges</h1>
      <div className='challenges__list grid grid-cols-3 gap-4'>
        {challengesList}
      </div>
    </div>
  )
}

export default Challenges
