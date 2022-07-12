/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { forms } from './forms'
import './styles.scss'

const ChallengeForm = ({ challengeName }) => {
  const [formsList, setFormsList] = useState([])
  const [currentFormId, setCurrentFormId] = useState(0)

  useEffect(() => {
    setFormsList(forms(next, previous, connection))
  }, [])

  const next = (currentId) => {
    setCurrentFormId(currentId + 1)
  }

  const previous = (currentId) => {
    setCurrentFormId(currentId - 1)
  }

  const connection = () => {
    const newUserData = {}
    formsList.forEach((form) => {
      console.log(form)
      form.inputs.forEach(({ name, value }) => {
        if (!['next', 'connection', 'previous'].includes(name)) {
          newUserData[name] = value
        }
      })
    })
    console.log(newUserData)
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
          {displayedForm}
        </div>
      </div>
    </div>
  )
}

export default ChallengeForm
