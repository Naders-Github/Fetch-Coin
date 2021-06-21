import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SignupForm from '../forms/Signup.jsx';
import LoginForm from '../forms/Login.jsx';
import './landing.css';

const getModalStyle = () => {
  const top = 48;
  const left = 47;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    backgroundColor: '#333',
  },
}));

const LandingNavbar = () => {
  const styles = useStyles();
  const history = useHistory();
  const [modalStyle] = useState(getModalStyle);
  const [openSignup, setOpenSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleHome = () => {
    history.push('/home')
  };

  const handleCoins = () => {
    history.push('/coins');
  };

  const handleSignupOpen = () => {
    setOpenSignup(true);
  };

  const handleSignupClose = () => {
    setOpenSignup(false);
  };

  const handleLoginOpen = () => {
    setOpenLogin(true);
  };

  const handleLoginClose = () => {
    setOpenLogin(false);
  };

  const signupBody = (
    <div style={modalStyle} className={styles.paper}>
      <SignupForm />
    </div>
  );
  const loginBody = (
    <div style={modalStyle} className={styles.paper}>
      <LoginForm />
    </div>
  );

  return (
    <div>
      <Navbar className="navbar">
        <h1 className="landing-title">FetchCoin</h1>
        <div className="button-container">
          <div className="landing-buttons text-center">
            <label className="landing-button" type="button" onClick={handleCoins}>Prices</label>
            <label className="landing-button" type="button">Career</label>
            <label className="landing-button" type="button">Company</label>
            <label className="landing-button" type="button">Developers</label>
            <label className="landing-button" type="button" onClick={handleSignupOpen}>SignUp</label>
            <label className="landing-button" type="button" onClick={handleLoginOpen}>Login</label>
          </div>
        </div>
        <div>
          <Modal
            open={openSignup}
            onClose={handleSignupClose}
            className="modal-background"
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {signupBody}
          </Modal>
        </div>
        <div>
          <Modal
            open={openLogin}
            onClose={handleLoginClose}
            className="modal-background"
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {loginBody}
          </Modal>
        </div>
      </Navbar>
    </div>
  )
}

export default LandingNavbar;