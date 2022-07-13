import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/user-context';

import Logo from '../../assets/images/logo-hetic.png'
import './styles.scss'

const Header = () => {
  const userContext = useContext(UserContext)
  const { user } = userContext

  const userProfile = user.email && user.email !== ' ' ? <Link to="/profile">{user.email}</Link> : <Link to="/signin">Connexion</Link>

  return (
    <header className='header'>
      <div className='header__logo-container'>
        <Link to="/" className='header__logo'><img src={Logo} alt="Logo" /></Link>
      </div>
      <div className='header__challenges'>
        
      </div>
      <div className='header__log-container'>
        <Link to="/challenges" className='header__challenges'>Challenges</Link>
        {userProfile}
      </div>
    </header>
  );
}

export default Header
