import React from 'react';
import { useHistory } from 'react-router-dom';
import LandingNavbar from '../landing/LandingNavbar.jsx';
import './forms.css';

const SignupForm = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSignup,
    handleSignin,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError
  } = props;

  return (
    <div>
      <LandingNavbar />
      <section className="forms">
        {!hasAccount ? (
          <div className="loginContainer">
            <h1 className="title"><b>Create your account</b></h1>
            <label>Email</label>
            <input
              className="input"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)} />
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <input
              className="input"
              type="text"
              value={password}
              onChange={(event) => setPassword(event.target.value)} />
            <p className="errorMsg">{passwordError}</p>
            <div className="btn-container">
              <>
                <button onClick={handleSignup}>Create account</button>
                <br />
                <u onClick={() => setHasAccount(!hasAccount)}>Already Have an account? Log in</u>
              </>
            </div>
          </div>

        ) : (
          <div className="loginContainer">
            <h1 className="title"><b>Sign in</b></h1>
            <label>Email</label>
            <input
              className="input"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)} />
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <input
              className="input"
              type="text"
              value={password}
              onChange={(event) => setPassword(event.target.value)} />
            <p className="errorMsg">{passwordError}</p>
            <div className="btn-container">
              <>
                <button onClick={handleSignin}>Sign in</button>
                <br />
                <u onClick={() => setHasAccount(!hasAccount)}>Don't have an account? Sign up</u>
              </>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default SignupForm;