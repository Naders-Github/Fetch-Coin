import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import CoinsList from './CoinsList.jsx';
import Navbar from '../navbar/Navbar.jsx';
// import Charts from './Charts.jsx';
import './coinList.css'

const Coins = () => {
  const [search, setSearch] = useState('');
  const coins = useSelector((state) => state.coinsReducer.coins);

  const handleChange = (event, value) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="coin-main">
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
            <CoinsList
              coin={coin}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coins;

