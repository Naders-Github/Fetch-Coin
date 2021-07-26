import React, { useState, useEffect } from 'react';
import firebase from '../../firebase/firebase.js';
import Home from '../home/Home.jsx';
import SignupForm from './SignupForm.jsx';

const SignupAuth = () => {
  const [user, setUser] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setFirstName('');
    setLastName('');
    setEmailError('');
    setPasswordError('');
  }

  const handleSignin = () => {
    clearErrors();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message)
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleSignup = () => {
    clearErrors();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
          case "auth/user-not-found":
            setEmailError(err.message)
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
        }
      });
  }

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div>
      {user ? (
        <Home />
      ) : (
        <div>
          <SignupForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSignin={handleSignin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError} />
        </div>
      )}
    </div>
  );
};

export default SignupAuth;