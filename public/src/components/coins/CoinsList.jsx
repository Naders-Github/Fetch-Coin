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
        <img src={coin.image} alt='crypto' />
        <p className="coinName">{coin.name}</p>
        <p className='coin-symbol'>{coin.symbol}</p>
      </div>
      <div className='coin-data'>
        <p className="coin-price">${coin.current_price > 0 ? (
          coin.current_price.toLocaleString()
        ) : (
          Math.round(coin.current_price * 100000000) / 100000000
        )}
        </p>
        <p className='coin-volume'>${coin.total_volume.toLocaleString()}</p>
        {
          coin.market_cap_change_percentage_24h < 0
            ? <span className="red">{Math.round(coin.market_cap_change_percentage_24h.toLocaleString() * 10) / 10}%</span>
            : <span className="green">{Math.round(coin.market_cap_change_percentage_24h.toLocaleString() * 10) / 10}%</span>
        }
        <p className='coin-marketcap'>
          Cap: ${coin.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  )
}

export default CoinsList;

