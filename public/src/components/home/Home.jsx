import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { WatchListContext } from "../../context/watchListContext";
import coinGecko from '../../apis/coinGecko';
import AddCoin from "./AddCoin";
import Watch from "./Watch";
import Navbar from '../navbar/Navbar'

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    coinGecko.get('/coins')
      .then(({ data }) => {
        console.log(data)
        dispatch({ type: 'coins', coins: data });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Navbar />
      <AddCoin />
      <Watch />
    </div>
  );
};

export default Home;
