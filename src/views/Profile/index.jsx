import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/user-context';
import './styles.scss'
import { Link } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate()
  const handleClick = async () => {
    localStorage.clear()
    userContext.setUser({ email: ' ' })
    navigate('/signin')
  }

  const userContext = useContext(UserContext)
  const { user } = userContext

  const userProfile = user.email && user.email !== ' ' ? <p>{user.email}</p> : <Link to="/signin">Connexion</Link>

  return (
    <main className="flex flex-col mt-20">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center px-2">
        <div className="bg-gray-700 px-6 py-8 rounded shadow-m w-full h-full">
          <h1 className="mb-8 text-3xl text-center">Your Profile</h1>
          <p className='mb-8 text-2xl text-center'>{userProfile}</p>
          <button
            onClick={handleClick}
            type="submit"
            className="w-full text-center py-3 rounded bg-red-600 text-white hover:bg-red-500 focus:outline-none my-1"
          >
            Sign off
          </button>
        </div>
      </div>
    </main>
  );
}

export default Profile
