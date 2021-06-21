import React, { useEffect, useState, useContext } from "react";
import axios from "../../apis/coinGecko";
import { WatchListContext } from "../../context/watchListContext";
import WatchList from "./WatchList";
import regeneratorRuntime from 'regenerator-runtime';
import { Container, Row } from 'react-bootstrap';
import './home.css';

const Watch = () => {
  const [coins, setCoins] = useState([]);
  const { watchList, deleteCoin } = useContext(WatchListContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios.get("/coins/markets/", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(","),
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };

    if (watchList.length > 0) {
      fetchData();
    } else setCoins([]);
  }, [watchList]);

  const renderCoins = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    console.log(coins)
    return (
      <div className="watch-list">
        {coins.map((coin) => {
          return <WatchList key={coin.id} coin={coin} deleteCoin={deleteCoin} />
        })}
      </div>
    );
  };

  return <div>{renderCoins()}</div>;
};

export default Watch;
