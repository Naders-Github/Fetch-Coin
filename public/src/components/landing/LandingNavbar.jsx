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
    <div>
      <Navbar className="navbar">
        <div className="logo-container">
          <img className="logo" src={logo} onClick={handleHome}/>
        </div>
        <div className="button-container">
          <div className="landing-buttons text-center">
            <label id="home" className="landing-button" onClick={handleHome}><b>Home</b></label>
            <label className="landing-button" type="button" onClick={handleCareer}><b>Career</b></label>
            <label className="landing-button" type="button" onClick={handleCompany}><b>Company</b></label>
            <label className="landing-button" type="button" onClick={handleDevelopers}><b>Developers</b></label>
          </div>
          <div className="signInUpButtons">
            <label className="signin-button" type='submit' onClick={handleSigninAuth}><b>Sign in</b></label>
            <button id="login-button" type='submit' onClick={handleSignupAuth}><b>Sign up</b></button>
          </div>
        </div>
      </Navbar>
    </div>
  )
}

export default LandingNavbar;