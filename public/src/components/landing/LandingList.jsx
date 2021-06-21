import React from 'react';
import { Link } from 'react-router-dom';

const LandingList = ({ coin }) => {

  return (
    <div className="landing-coin-row">
      <Link
        to={`/coins/${coin.id}`}
        type="button"
        className="landing-details-button"
      >
        Details
      </Link>
      <div className="landing-coin">
        <img className="landing-list-image" src={coin.image} />
      </div>
      <p className="landing-coin-name">{coin.name}</p>
      <div>
        <p className="landing-coin-price">${coin.current_price > 0 ? (
          coin.current_price.toLocaleString()
        ) : (
          Math.round(coin.current_price * 100000000) / 100000000
        )}
        </p>
      </div>
      <div>
        <p className="landing-coin-volume">${coin.total_volume.toLocaleString()}</p>
      </div>
      <div>
        {
          coin.market_cap_change_percentage_24h < 0
            ? <span className="red">{Math.round(coin.market_cap_change_percentage_24h.toLocaleString() * 10) / 10}%</span>
            : <span className="green">{Math.round(coin.market_cap_change_percentage_24h.toLocaleString() * 10) / 10}%</span>
        }
      </div>

    </div>
  );
};

export default LandingList;