import React, { useState, useEffect } from 'react'
import ChallengeForm from './challengeForm'
import './styles.scss'

const Challenge = () => {
  const [challenge, setChallenge] = useState({})

  useEffect(() => {
    setChallenge({ id: 1, name: 'SQL CHALLENGE', questions: [{ id: 1, text: 'Met un fichier hello.txt', points: 3 }] })
  }, [setChallenge])

  return (
    <div className='challenge'>
      <ChallengeForm challengeName={challenge.name} />
    </div>
  )
}

export default Challenge
