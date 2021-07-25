import React from "react";
import { Link } from "react-router-dom";

const WatchList = ({ coin, deleteCoin }) => {
  return (
    <div className="watched-coin-row">
      <div className="watched-coin">
        <img className="watched-coin-image" src={coin.image} />
        <p className="watched-coin-name">{coin.name}</p>
        <p className="watched-coin-price">Price: ${coin.current_price.toLocaleString()}</p>
        {
          coin.market_cap_change_percentage_24h < 0
            ? <span className="red">Low: {Math.round(coin.market_cap_change_percentage_24h * 10) / 10}%</span>
            : <span className="green">High: {Math.round(coin.market_cap_change_percentage_24h * 10) / 10}%</span>
        }
      </div>
      <Link
        to={`/coins/${coin.id}`}
        type="button"
        className="watched-details-button"
      >
        Details
      </Link>
      <i
        onClick={(event) => {
          event.preventDefault();
          deleteCoin(coin.id);
        }}
        className="delete-icon far fa-times-circle text-danger"
      ></i>
    </div>
  );
};

export default WatchList;
