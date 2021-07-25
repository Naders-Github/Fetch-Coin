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
import logo from '../landing/FetchLogo.png';
import './navbar.css';

const NavBar = ({ filteredCoins, handleChange, search }) => {
  const history = useHistory();
  const [toggle, setToggle] = useState(false);

  const handleSearchClick = () => {
    setToggle(!toggle);
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
      <img className="logo" src={logo} />
      <Navbar sticky="top" id="navbar">
        <div className="icons">
          {!toggle ? (
            <SearchIcon onClick={handleSearchClick} className="search-icon" />
          ) : (
            <div className="coin-search">
              <input className="coin-input" type="text" onChange={handleChange} placeholder="Fetch Coins..." />
            </div>
          )}
          <HomeIcon onClick={handleHome} className="home-icon" />
          <SyncAltIcon onClick={handleTrade} className="trade-icon" />
          <MonetizationOnIcon onClick={handleCoins} className="coin-icon" />
          <NotificationsIcon onClick={handleNotifications} className="note-icon" />
          <Dropdown />
        </div>
      </Navbar>
    </div>
  )
};

export default NavBar;