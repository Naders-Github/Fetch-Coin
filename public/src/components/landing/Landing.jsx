import React, { useState, useEffect } from 'react';
import axios from 'axios';
import coinGecko from '../../apis/coinGecko';
import { useSelector, useDispatch } from 'react-redux';
import LandingList from './LandingList.jsx';
import LandingCoins from './LandingCoins.jsx';
import SearchIcon from '@material-ui/icons/Search';
import LandingNavbar from './LandingNavbar.jsx';
import './landing.css';

const LandingPage = () => {
  const [search, setSearch] = useState('');
  const coins = useSelector((state) => state.coinsReducer.coins);
  const moreCoins = useSelector((state) => state.moreCoinsReducer.moreCoins);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    coinGecko.get('/coins')
      .then(({ data }) => {
        setCoins(data)
        dispatch({ type: 'coins', coins: data });
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    coinGecko.get('/search/trending')
      .then(({ data }) => {
        dispatch({ type: 'trendingCoins', trendingCoins: data.coins });
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios.get('/api/coins')
      .then(({ data }) => {
        dispatch({ type: 'moreCoins', moreCoins: data });
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    coinGecko.get('/status_updates')
      .then(({ data }) => {
        dispatch({ type: 'users', users: data.status_updates });
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCoins = moreCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleSearchClick = () => {
    setToggle(true);
  };

  return (
    <div>
      <LandingNavbar/>
      <LandingCoins />
      <div className="landing-list">
        {!toggle ? (
          <SearchIcon onClick={handleSearchClick} className="search-icon" />
        ) : (
          <div className="coin-search">
            <input className="coin-input" type="text" onChange={handleChange} placeholder="Fetch Coins..." />
          </div>
        )}
        {filteredCoins.map((coin) => (
          <LandingList coin={coin} key={coin.id} search={search} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
