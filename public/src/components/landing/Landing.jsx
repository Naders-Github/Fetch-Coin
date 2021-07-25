import React, { useState, useEffect } from 'react';
import axios from '../../apis/coinGecko.js';
import { useSelector, useDispatch } from 'react-redux';
import LandingList from './LandingList.jsx';
import LandingCoins from './LandingCoins.jsx';
import SearchIcon from '@material-ui/icons/Search';
import LandingNavbar from './LandingNavbar.jsx';
import phonePhoto from './iphone.png'
import './landing.css';

const LandingPage = () => {
  const [search, setSearch] = useState('');
  const coins = useSelector((state) => state.coinsReducer.coins);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/coins')
      .then(({ data }) => {
        console.log(data)
        dispatch({ type: 'coins', coins: data });
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios.get('/search/trending')
      .then(({ data }) => {
        dispatch({ type: 'trendingCoins', trendingCoins: data.coins });
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios.get('/status_updates')
      .then(({ data }) => {
        dispatch({ type: 'users', users: data.status_updates });
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchClick = () => {
    setToggle(true);
  };

  return (
    <div>
      <LandingNavbar />
      <div className="right-column">
        <img className="phone-photo" src={phonePhoto} />
      </div>
      <div className="left-column">
        <h1 className="heading">Get $10 in free Bitcoin for signing up today</h1>
        <h3 className="sub-heading">Fetch Coin is an easy platform to buy and sell cryptocurrency. Get started today.</h3>
          <button id="body-signin-button" type="submit" ><b>Sign in</b></button>
          <input id="email-input" type="text" placeholder="Email" />
      </div>
      {/* <LandingCoins />
      <div className="">
        {!toggle ? (
          <SearchIcon onClick={handleSearchClick} className="search-icon" />
        ) : (
            <div className="coin-search">
              <input className="coin-input" type="text" onChange={handleChange} placeholder="Fetch Coins..." />
            </div>
        )}
        <div className="coin-container">
          <div className="coin-list">
            {filteredCoins.map((coin) => (
              <LandingList coin={coin} key={coin.id} search={search} />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LandingPage;
