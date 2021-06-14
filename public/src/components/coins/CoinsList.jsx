import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import AddCoin from '../home/AddCoin'
import { WatchListContext } from "../../context/watchListContext";

const CoinsList = ({ coin }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const watch = useSelector((state) => state.watchReducer.watch);
  const [isActive, setIsActive] = useState(false);
  const { addCoin } = useContext(WatchListContext);

  const handleClick = (item) => {
    addCoin(item);
    setIsActive(false);
  };

  return (
    <div>
      <div className='coin-row'>
        <div className='coin'>
          <Link
            to={`/coins/${coin.id}`}
            type="button"
            className="detailsButton"
            onClick={() => {
              dispatch({ type: 'details', details: coin })
            }}
          >
            Details
          </Link>
          <div className="addButton">
            Add
          </div>
          <img src={coin.image.small} alt='crypto' />
          <p className="coinName">{coin.name}</p>
          <p className='coin-symbol'>{coin.symbol}</p>
        </div>
        <div className='coin-data'>
          <p className="coin-price">${coin.market_data.current_price.usd > 0 ? (
            coin.market_data.current_price.usd.toLocaleString()
          ) : (
            Math.round(coin.market_data.current_price.usd * 100000000) / 100000000
          )}
          </p>
          <p className='coin-volume'>${coin.market_data.total_volume.usd.toLocaleString()}</p>
          {
            coin.market_cap_change_percentage_24h > 0
              ? <span className="coin-percent red">{Math.round(coin.market_data.market_cap_change_percentage_24h.toLocaleString() * 10) / 10}%</span>
              : <span className="coin-percent green">{Math.round(coin.market_data.market_cap_change_percentage_24h.toLocaleString() * 10) / 10}%</span>
          }
          <p className='coin-marketcap'>
            Cap: ${coin.market_data.market_cap.usd.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CoinsList;

