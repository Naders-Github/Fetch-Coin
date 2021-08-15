import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import logo from '../../../images/FetchLogo.png'
import './landing.css';

const LandingNavbar = () => {
  const history = useHistory();

  const handleHome = () => {
    history.push('/')
  };

  const handleCompany = () => {
    history.push('/company');
  };
  const handleCareer = () => {
    history.push('/career');
  };
  const handleDevelopers = () => {
    history.push('/developers');
  };

  const handleSignupAuth = () => {
    history.push('/signup');
  };

  const handleSigninAuth = () => {
    history.push('/signin');
  };

  return (
    <section>
      <div className="container container-narrow">
        <img className="logo" src={logo} onClick={handleHome} />
        <div className="nav-buttons">
          <label className="home" type="button" onClick={handleHome}><b>Home</b></label>
          <label type="button" onClick={handleCompany}><b>Company</b></label>
          <label type="button" onClick={handleDevelopers}><b>Developers</b></label>
          <label type='button' onClick={handleSigninAuth}><b>Sign in</b></label>
          <button className="signup-button" type='button' onClick={handleSignupAuth}><b>Sign up</b></button>
        </div>
      </div>
    </section>
  )
}

export default LandingNavbar;