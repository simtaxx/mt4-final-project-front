/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from 'react'
import { checkUserConnections, sendUserChallengeInformations, checkQuestions } from '../../../api'
import UserContext from '../../../contexts/user-context'
import LoadingContext from '../../../contexts/loading-context'
import { forms } from './forms'
import './styles.scss'

const ChallengeForm = ({ challengeName, challengeId, questions }) => {
  const userContext = useContext(UserContext)
  const loadingContext = useContext(LoadingContext)
  const [formsList, setFormsList] = useState([])
  const [currentFormId, setCurrentFormId] = useState(0)
  const [showChallenge, setShowChallenge] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState({})
  const [isChallengeFinished, setIsChallengeFinished] = useState(false)
  const [score, setScore] = useState(0)

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
    loadingContext.setIsLoading(true)
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
        setCurrentQuestion(questions[0])
        setShowChallenge(true)
        userContext.setUser(prevState => ({ ...prevState, ...newUserData }))
      }
    }
    loadingContext.setIsLoading(false)
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

  const handleCheckQuestions = async () => {
    loadingContext.setIsLoading(true)
    setScore(0)
    const { token } = JSON.parse(localStorage.getItem('user'))
    const options = { headers: { token: `Bearer ${token}` } }
    const { data }= await checkQuestions(`/challenges/${challengeId}/questions`, options)
    console.log(data, data[0])
    const failedQuestion = data.find(question => !question.isReponseOk)
    if (failedQuestion) {
      const question = questions.find(question => question.questionId === failedQuestion.questionId)
      setCurrentQuestion(question)
    } else {
      setIsChallengeFinished(true)
      console.log(isChallengeFinished)
    }
    data.forEach((question) => {
      if (question.isReponseOk) {
        setScore(score + question.questionScore)
      }
    })
    loadingContext.setIsLoading(false)
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
          { showChallenge ? <h2 className="mb-8 text-3xl text-center">{score}</h2> : false}
          {
            showChallenge
              ? (
                <div>
                  <h2>{currentQuestion.questionTitle}</h2>
                  <p>Question amount: {currentQuestion.questionPoints}</p>
                  <button onClick={() => handleCheckQuestions()}
                    className="w-full text-center py-3 rounded bg-white text-black hover:bg-green-400 focus:outline-none my-1"
                  >
                    Start
                  </button>
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
