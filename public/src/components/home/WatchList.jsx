import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';

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
        <p className='coin-marketcap'>
          Market Cap: ${coin.market_cap.toLocaleString()}
        </p>
      </div>
      <Link
        to={`/coins/${coin.id}`}
        type="button"
        className="watched-details-button"
      >
        Details
      </Link>
      <i
        onClick={(e) => {
          e.preventDefault();
          deleteCoin(coin.id);
        }}
        className="delete-icon far fa-times-circle text-danger"
      ></i>
    </div>

    // <Card style={{ width: '18rem' }}>
    //   <Link to={`/coins/${coin.id}`}>
    //     <Card.Img className="coinlist-image" variant="top" src={coin.image} />
    //     <Card.Body>
    //       <Card.Title>{coin.name}</Card.Title>
    //       <span className="text-decoration-none">{coin.current_price}</span>
    //       {
    //         coin.market_cap_change_percentage_24h > 0
    //           ? <span className="coin-percent red">{Math.round(coin.market_cap_change_percentage_24h * 10) / 10}%</span>
    //           : <span className="coin-percent green">{Math.round(coin.market_cap_change_percentage_24h * 10) / 10}%</span>
    //       }
    //       <Card.Text>
    //         coin description
    //       </Card.Text>
    //     </Card.Body>
    //   </Link>
    // <i
    //   onClick={(e) => {
    //     e.preventDefault();
    //     deleteCoin(coin.id);
    //   }}
    //   className="delete-icon far fa-times-circle text-danger"
    // ></i>
    // </Card>
  );
};

export default WatchList;
