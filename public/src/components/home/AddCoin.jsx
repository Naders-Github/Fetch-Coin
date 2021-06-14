import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { WatchListContext } from "../../context/watchListContext";

const AddCoin = ({ handleActiveClick }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const { addCoin } = useContext(WatchListContext);
  const coins = useSelector((state) => state.coinsReducer.coins);

  const handleClick = (coin) => {
    addCoin(coin);
    setIsActive(false);
  };

  return (
    <div className="dropdown">
      <button
        onClick={() => setIsActive(!isActive)}
        className="btn btn-primary dropdown-toggle"
        type="button"
      >
        Add Coin
      </button>
      <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
        {coins.map((coin) => {
          return (
            <a
              onClick={() => {
                handleClick(coin.id)
                dispatch({ type: 'watch', watch: coin })
              }}
              href="#"
              className="dropdown-item"
            >
              {coin.id}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AddCoin;
