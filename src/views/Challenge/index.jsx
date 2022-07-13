/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCurrentChallenge } from '../../api'
import ChallengeForm from './challengeForm'
import './styles.scss'

const Challenge = () => {
  const { id } = useParams()
  const [selectedChallenge, setChallenge] = useState({})

  useEffect(() => {
    getCurrentChallenge()
  }, [setChallenge])

  const getCurrentChallenge = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'))
    const options = { headers: { token: `Bearer ${token}` } }
    const { data } = await fetchCurrentChallenge(`/challenges/${id}`, options)
    setChallenge(data)
  }

  return (
    <div className='challenge'>
      <ChallengeForm
        challengeName={selectedChallenge.challengeName}
        challengeId={selectedChallenge.challengeId}
        questions={selectedChallenge.questions}
      />
    </div>
  )
}

export default Challenge
