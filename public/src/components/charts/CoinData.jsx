import React, { useContext } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { WatchListContext } from "../../context/watchListContext";
import '../coinDetails/coinDetails.css';

const CoinData = ({ data }) => {
  console.log(data)
  const { addCoin, watchList, deleteCoin } = useContext(WatchListContext);
  const days = useSelector((state) => state.dayReducer.day);
  const weeks = useSelector((state) => state.weekReducer.week);
  const years = useSelector((state) => state.yearReducer.year);

  const handleClick = (item) => {
    alert(`${data.name} has been added to your watch list!`)
    addCoin(item);
  };

  const handleDeleteClick = (item) => {
    alert(`${data.name} has been deleted from your watch list!`)
    deleteCoin(item)
  }

  const renderData = () => {
    if (data) {
      return (
        <div className="coin-data-list">
          <img className="coin-data-image" src={data.image} />
          <h2 className="gradient-text" id="coin-data-title">{data.name}</h2>
          {watchList.includes(data.id) ? (
            <div className="detail-delete-button" onClick={() => handleDeleteClick(data.id)}>
            Remove Coin From Watch List
          </div>
          ) : (
            <div className="detail-add-button" onClick={() => handleClick(data.id)}>
              Add Coin To Watch List
            </div>
          )}
          <div className="coin-data-cap">
            <span className="coin-data-market-cap-title">MarketCap</span>
            <span className="coin-data-market-cap">${data.market_cap.toLocaleString()}</span>
          </div>
          <hr />
          <div className="coin-data-volume">
            <span className="coin-data-volume-title">Volume(24H)</span>
            <span className="coin-data-volume">${data.total_volume.toLocaleString()}</span>
          </div>
          <hr />
          <div className="coin-data-high">
            <span className="coin-data-high24-title">high24h</span>
            <span className="coin-data-high24">${data.high_24h.toLocaleString()}</span>
          </div>
          <hr />
          <div className="coin-data-low">
            <span className="coin-data-low24-title">low24h</span>
            <span className="coin-data-low24">${data.low_24h.toLocaleString()}</span>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
