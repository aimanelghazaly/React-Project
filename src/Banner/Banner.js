// Banner.js
import React from 'react';
import '../styles/Banner.css';
import logo from '../Image/logo bann.png';

function Banner() {
  const title ='La maison jungle';
  return (
    <div className='lmj-banner'>
      <img src={logo} alt='Logo' />
      <h1 className='lmj-title'> {title}</h1>
    </div>
  );
}

export default Banner;
