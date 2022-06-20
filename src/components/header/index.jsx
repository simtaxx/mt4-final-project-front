import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo-hetic.png'
import './styles.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo-container'>
        <Link to="/" className='header__logo'><img src={Logo} alt="Logo" /></Link>
        <Link to="/challenges" className='header__challenges'>Challenges</Link>
      </div>
      <div className='header__log-container'>
        <Link to="/signin">Connexion</Link>
        <Link to="/signup">Inscription</Link>
      </div>
    </header>
  );
}

export default Header
