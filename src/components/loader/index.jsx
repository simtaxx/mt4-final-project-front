import React from 'react';

import './styles.scss'
import loaderGif from '../../assets/images/loader.gif'

const Loader = () => {

  return (
    <div className='loader'>
      <img src={loaderGif} alt="Loader" />
    </div>
  );
}

export default Loader
