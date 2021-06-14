import React, { useState, useeffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Navbar from '../navbar/Navbar.jsx';
import Signup from '../forms/Signup.jsx';
// import Login from './forms/Login.jsx';

const LandingPage = () => {
  const history = useHistory();
  const [modalType, setModalType] = useState('');

  const handleSignUp = () => {
    history.push('/home');
  };
  const handleLogin = () => {
    history.push('/home');
  };

  return (
    <div className="landing-page">
      <Navbar/>
      <button className="landing-buttons" type="submit" onClick={handleLogin}>
        {/* <Login /> */}
        Login
      </button>
      <button className="landing-buttons" type="submit" onClick={handleSignUp}>
        Sign Up
      </button>
      {/* <Signup modalClose={modalClose} modalType={modalType}/> */}
    </div>
  );
};

export default LandingPage;