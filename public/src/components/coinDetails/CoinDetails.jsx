import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HistoryChart from "../charts/HistoryChart";
import CoinData from "../charts/CoinData";
import axios from "../../apis/coinGecko";
import Navbar from '../navbar/Navbar';
import './coinDetails.css';

const CoinDetailPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (coins) => {
    return coins.map((coin) => {
      return {
        t: coin[0],
        y: coin[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, year, years, detail] = await Promise.all([
        axios.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        axios.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "7",
          },
        }),
        axios.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "365",
          },
        }),
        axios.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "1825",
          },
        }),
        axios.get("/coins/markets/", {
          params: {
            vs_currency: "usd",
            ids: id,
          },
        }),
      ]);

      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        years: formatData(years.data.prices),
        detail: detail.data[0],
      });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  console.log(coinData)

  const renderData = () => {
    if (isLoading) {
      return <div>Loading....</div>;
    }
    return (
      <div>
        <Navbar />
        <div className="historyChart">
          <HistoryChart data={coinData} detail={coinData.detail}/>
        </div>
        <div className="coinData">
          <CoinData data={coinData.detail} />
        </div>
      </div>
    );
  };

  return renderData();
};

export default CoinDetailPage;
