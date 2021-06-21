import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import CoinsList from './CoinsList.jsx';
import Navbar from '../navbar/Navbar.jsx';
import './coinList.css'

const Coins = () => {
  const [search, setSearch] = useState('');
  const moreCoins = useSelector((state) => state.moreCoinsReducer.moreCoins);
  const users = useSelector((state) => state.usersReducer.users);
  const handleChange = (event, value) => {
    setSearch(event.target.value);
  };

  const filteredCoins = moreCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <Navbar filteredCoins={filteredCoins} handleChange={handleChange} search={search} />
        <div className="description">
          <span className="coin-description">Coin</span>
          <span className="price-description">Price</span>
          <span className="volume-description">Volume</span>
          <span className="highLow-description">High/Low</span>
          <span className="marketCap-description">Market Cap</span>
        </div>
      <div className="coin-container">
        <div className="coin-list">
          {filteredCoins.map((coin, index) => (
            <CoinsList coin={coin} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coins;

