/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const ChallengeCard = ({ challenge }) => {

  return (
    <Link to={`/challenges/${challenge.challengeId}`} style={{backgroundColor: challenge.score === 20 ? "rgba(110, 231, 183, 0.5)" : ""}} className='challenge-card block p-6 max-w-sm rounded-lg border border-gray-200 shadow-md bg-gray-500 hover:bg-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <p className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{challenge.challengeName}</p>
      <p>Score: {challenge.score}/20</p>
    </Link>
  )
}

export default ChallengeCard
