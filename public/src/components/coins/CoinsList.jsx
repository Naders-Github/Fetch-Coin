import React, { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { WatchListContext } from "../../context/watchListContext";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './coinList.css';

const CoinsList = ({ coin }) => {
  const { addCoin, watchList, deleteCoin } = useContext(WatchListContext);
  const dispatch = useDispatch();

  const handleAddClick = (item) => {
    alert(`${coin.name} has been added to your watch list!`);
    addCoin(item);
  };

  const handleDeleteClick = (item) => {
    alert(`${coin.name} has been deleted from your watch list!`)
    deleteCoin(item)
  }

  return (
    <div className='coin-row'>
      {watchList.includes(coin.id) ? (
        <StarIcon onClick={() => handleDeleteClick(coin.id)} />
      ) : (
        <StarBorderIcon onClick={() => handleAddClick(coin.id)} />
      )}
      <Link
        to={`/coins/${coin.id}`}
        type="button"
        className="details-button"
        onClick={() => {
          dispatch({ type: 'details', details: coin })
        }}
      >
        Details
      </Link>
      <div className='coin'>
        <img src={coin.image.thumb} alt='crypto' />
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
          coin.market_data.market_cap_change_percentage_24h < 0
            ? <span className="red">{Math.round(coin.market_data.market_cap_change_percentage_24h.toLocaleString() * 10) / 10}%</span>
            : <span className="green">{Math.round(coin.market_data.market_cap_change_percentage_24h.toLocaleString() * 10) / 10}%</span>
        }
        <p className='coin-marketcap'>
          ${coin.market_data.market_cap.usd.toLocaleString()}
        </p>
      </div>
    </div>
  )
}

export default CoinsList;

