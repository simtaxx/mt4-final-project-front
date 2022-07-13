/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { checkUserConnections, sendUserChallengeInformations } from '../../../api'
import { forms } from './forms'
import './styles.scss'

const ChallengeForm = ({ challengeName, challengeId, questions }) => {
  const [formsList, setFormsList] = useState([])
  const [currentFormId, setCurrentFormId] = useState(0)
  const [showChallenge, setShowChallenge] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState({})

  useEffect(() => {
    setFormsList(forms(next, previous, connection))
  }, [])

  const next = (currentId) => {
    setCurrentFormId(currentId + 1)
  }

  const previous = (currentId) => {
    setCurrentFormId(currentId - 1)
  }

  const connection = async () => {
    const newUserData = {}
    formsList.forEach((form) => {
      form.inputs.forEach(({ name, value }) => {
        if (!['next', 'connection', 'previous'].includes(name)) {
          newUserData[name] = value
        }
      })
    })
    const { token } = JSON.parse(localStorage.getItem('user'))
    const options = { headers: { token: `Bearer ${token}` } }
    const { data } = await sendUserChallengeInformations(`/challenges/${challengeId}/user`, newUserData, options)
    if (data.message === 'Credentials added') {
      const { data } = await checkUserConnections(`/challenges/${challengeId}/check`, options)
      if (data.statusConnection) {
        console.log(questions)
        setCurrentQuestion(questions[0])
        setShowChallenge(true)
      }
    }
  }

  const updateFormList = (e, prop) => {
    const currentForm = formsList.find(form => form.id === currentFormId)
    const newInputs = currentForm.inputs.map((input) => {
      if (input.name === prop) {
        input.value = e.target.value
      }
      return input
    })
    const newForms = [...formsList]
    newForms[currentFormId].inputs = newInputs
    setFormsList(newForms)
  }

  const checkQuestions = () => {
    console.log('ça check')
  } 

  const displayedForm = formsList.find(form => form.id === currentFormId)?.inputs.map((input) => {
    return input.type === 'text'
      ? <input
          key={input.name}
          value={input.value}
          type={input.type}
          className={input.styles}
          name={input.name}
          placeholder={input.placeholder}
          onChange={(e) => updateFormList(e, input.name)}
        />
      : <button
          key={input.name}
          type={input.type}
          className={input.styles}
          onClick={input.name === 'connection' ? () => connection() : input.method}
        >
          {input.text}
        </button>
  })

  return (
    <div className="challenge-form flex flex-col mt-12">
      <div className="container mx-auto px-2 w-3/5 relative">
        <div className="bg-gray-700 px-6 py-8 rounded shadow-m w-full h-full">
          <h1 className="mb-8 text-3xl text-center">{challengeName}</h1>
          {
            showChallenge
              ? (
                <div>
                  <h2>{currentQuestion.questionTitle}</h2>
                  <p>Question amount: {currentQuestion.questionPoints}</p>
                  <button onClick={checkQuestions}>Start</button>
                </div>
              )
              : displayedForm
          }
        </div>
      </div>
    </div>
  )
}

export default ChallengeForm
