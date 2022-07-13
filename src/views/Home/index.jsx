import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../contexts/user-context';
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/wumpus';
import './styles.scss'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const userContext = useContext(UserContext)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const handleClick = async () => {
    navigate('/challenges')
  }

  return (
    <div className='main'>
      <h1 className="text-3xl mt-12 mb-8 font-bold">Bonjour et bienvenue !</h1>
      <h2 className="text-2xl mb-14 font-bold">Tu pourras ici suivre le parcours des challenges Hetic</h2>
      <h2 className="text-xl text-center mb-8">Tout est découpé étape par étape et tu auras les feedbacks instantanément !<br/>On a voulu que ce soit agréable et fluide, laisse-toi porter ;)</h2>
      <button
        onClick={handleClick}
        type="submit"
        className="w-96 text-center mt-6 py-3 rounded bg-white text-black hover:bg-green-400 focus:outline-none my-1"
      >
        C&#39;est parti !
      </button>
      <div className='lottieContainer'>
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
        />
      </div>
    </div>
  );
}

export default Home
