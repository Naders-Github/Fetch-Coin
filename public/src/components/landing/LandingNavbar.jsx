import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import SignupForm from '../forms/Signup.jsx';
import LoginForm from '../forms/Login.jsx';
import logo from './FetchLogo.png'
import './landing.css';

const LandingNavbar = () => {
  const history = useHistory();

  const handleHome = () => {
    history.push('/')
  };

  const handleCoins = () => {
    history.push('/coins');
  };

  const handleSignup = () => {
    history.push('/signup');
  };

  const handleLogin = () => {
    history.push('/login');
  };



  return (
    <div>
      <img className="logo" src={logo} onClick={() => handleHome()}/>
      <Navbar className="navbar">
        <div className="button-container">
          <div className="landing-buttons text-center">
            <label id="home" className="landing-button" onClick={handleHome}><b>Home</b></label>
            <label className="landing-button" type="button" onClick={handleCoins}><b>Prices</b></label>
            <label className="landing-button" type="button"><b>Career</b></label>
            <label className="landing-button" type="button"><b>Company</b></label>
            <label className="landing-button" type="button"><b>Developers</b></label>
          </div>
          <div className="signInUpButtons">
            <label className="signup-button" type='submit' onClick={handleSignup}><b>Sign up</b></label>
            <button id="login-button" type='submit' onClick={handleLogin}><b>Sign in</b></button>
          </div>
        </div>
      </Navbar>
    </div>
  )
}

export default LandingNavbar;