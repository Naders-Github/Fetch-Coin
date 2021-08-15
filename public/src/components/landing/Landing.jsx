import React, { useState, useEffect } from 'react';
import axios from '../../apis/coinGecko.js';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LandingList from './LandingList.jsx';
import LandingCoins from './LandingCoins.jsx';
import SearchIcon from '@material-ui/icons/Search';
import LandingNavbar from './LandingNavbar.jsx';
import phonePhoto from '../../../images/iphone.png';
import './landing.css';

const LandingPage = () => {
  const history = useHistory();
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

  const handleSignupAuth = () => {
    history.push('/signup');
  };

  return (
    <div>
      <LandingNavbar />
      <section>
        <div className="container">
          <div className="split">
            <div>
              <img className="phone-photo" src={phonePhoto} />
            </div>
            <div>
              <p>Get $10 in free Bitcoin for signing up today!</p>
              <p>Fetch Coin is an easy platform to buy and sell cryptocurrency. Get started today!</p>
              <button className="get-started-button" type="submit" onClick={handleSignupAuth}><b>GET STARTED</b></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
