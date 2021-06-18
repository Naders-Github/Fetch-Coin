import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { WatchListContext } from "../../context/watchListContext";
import { Dropdown } from 'react-bootstrap';
import './home.css';

const AddCoin = () => {
  const [isActive, setIsActive] = useState(false);
  const { addCoin } = useContext(WatchListContext);
  const coins = useSelector((state) => state.coinsReducer.coins);

  const handleClick = (coin) => {
    addCoin(coin);
    setIsActive(false);
  };

  const handleChange = (event) => {
    addCoin(event.target.value);
  };

  return (
    <div className="main-drop-down">
      <Dropdown>
        <Dropdown.Toggle drop="down" varient="success">
          Add Coin
        </Dropdown.Toggle>
        <Dropdown.Menu className="drop-down-menu" style={{overflowY: 'scroll', maxHeight: 700}} drop="down">
          {coins.map((coin) => (
            <Dropdown.Item
              key={coin.id}
              className="drop-down-item"
              onClick={() => handleClick(coin.id)}
            >
              {coin.name}
              <img className="drop-down-image" src={coin.image.small} />
              <Link
                to={`/coins/${coin.id}`}
                type="button"
                className="drop-down-details-button"
              >
                Details
              </Link>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default AddCoin;
