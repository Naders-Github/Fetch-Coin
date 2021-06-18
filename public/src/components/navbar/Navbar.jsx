import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import Dropdown from './Dropdown.jsx';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import styles from './navbar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    float: 'right',
    marginRight: '1vh',
    marginTop: '-11vh',
  },
  paper: {
    border: "1px solid",
    backgroundColor: "transparent"
  }
}));

const NavBar = ({ filteredCoins, handleChange, search }) => {
  const history = useHistory();
  const searchBarStyle = useStyles();
  const [toggle, setToggle] = useState(false);
  const coins = useSelector((state) => state.coinsReducer.coins);

  const handleSearchClick = () => {
    setToggle(!toggle)
  }

  const handleHome = () => {
    history.push('/home');
  };

  const handleNotifications = () => {
    history.push('/notifications');
  };

  const handleTrade = () => {
    history.push('/trade');
  };

  const handleCoins = () => {
    history.push('/coins');
  };

  return (
    <div>
      <Navbar sticky="top" className="navbar">
        <div className="icons">
          <HomeIcon onClick={handleHome} className="home-icon" />
          <SyncAltIcon onClick={handleTrade} className="trade-icon" />
          <MonetizationOnIcon onClick={handleCoins} className="coin-icon" />
          <NotificationsIcon onClick={handleNotifications} className="note-icon" />
          {!toggle ? (
            <SearchIcon onClick={handleSearchClick} className="search-icon" />
          ) : (
            <div className="coin-search">
              <input className="coin-input" type="text" onChange={handleChange} placeholder="Fetch Coins..." />
            </div>
          )}
          <Dropdown />
        </div>
      </Navbar>
      <h1 className="gradient-text">Fetch Coin</h1>
    </div>
  )
};

export default NavBar;