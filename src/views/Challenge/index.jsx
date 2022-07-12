import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ChallengeForm from './challengeForm'
import './styles.scss'

const Challenge = () => {
  const location = useLocation()
  const [challenge, setChallenge] = useState({})

  useEffect(() => {
    setChallenge({ id: 1, name: location.state.name, questions: [{ id: 1, text: 'Met un fichier hello.txt', points: 3 }] })
  }, [setChallenge])

  return (
    <div className='challenge'>
      <ChallengeForm challengeName={challenge.name} />
    </div>
  )
}

export default Challenge
