import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import CoinsList from './CoinsList.jsx';
import Navbar from '../navbar/Navbar.jsx';
// import Charts from './Charts.jsx';
import { WatchListContext } from '../../context/watchListContext';
import './coinList.css'

const Coins = () => {
  const [search, setSearch] = useState('');
  const [isActive, setIsActive] = useState(false);
  const { addCoin } = useContext(WatchListContext);
  const coins = useSelector((state) => state.coinsReducer.coins);

  const handleClick = (coin) => {
    addCoin(coin);
    setIsActive(false);
  };

  const handleActiveClick = () => {
    setIsActive(true)
  }

  const handleChange = (event, value) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="coin-main">
      <Navbar filteredCoins={filteredCoins} handleChange={handleChange} search={search}/>
      <div className="left-column">
      </div>
      <div className="coin-container">
        <div className="right-column">
            <div className="coin-list">
              {filteredCoins.map((coin, index) => (
                <CoinsList coin={coin} key={index} isActive={isActive} handleClick={handleClick} handleActiveClick={handleActiveClick}/>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Coins;

