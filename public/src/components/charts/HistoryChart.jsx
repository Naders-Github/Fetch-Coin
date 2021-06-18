import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import Chartjs from "chart.js";
import { historyOptions } from "./chartConfigs/chartConfigs";
// import CoinData from './CoinData.jsx';

const HistoryChart = ({ data }) => {
  const dispatch = useDispatch();
  const chartRef = useRef();
  const { day, week, year, years, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      case "5y":
        return years;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name} price`,
              data: determineTimeFormat(),
              borderColor: "#7918f2",
              pointRadius: 2,
            },
          ],
        },
        options: {
          interaction: {
            mode: 'index',
          },
          ...historyOptions,
        },
      });
    }
  });

  const renderPrice = () => {
    if (detail) {
      return (
        <div>
          <p className="my-0">${detail.current_price.toLocaleString()}</p>
        </div>
      );
    }
  };
  return (
    <div className="history-chart">
      <div className="history-chart bg-white border mt-2 rounded p-3">
        <div className="chart-buttons">
          <button
            className="days-button"
            onClick={() => {
              setTimeFormat("24hr")
              dispatch({ type: 'day', day: day })
            }}
          >
            24h
          </button>
          <button
            className="weeks-button"
            onClick={() => {
              setTimeFormat("7d")
              dispatch({ type: 'week', week: week })
            }}
          >
            7d
          </button>
          <button
            className="years-button"
            onClick={() => {
              setTimeFormat("1y")
              dispatch({ type: 'year', year: year })
            }}
          >
            1y
          </button>
          <button
            className="all-button"
            onClick={() => {
              setTimeFormat("5y")
            }}
          >
            5y
          </button>
        </div>
      </div>
      <div className="chart-price">{renderPrice()}</div>
      <div>
        <canvas ref={chartRef} id="myChart" width={20} height={450}></canvas>
      </div>
      {/* <div className="coin-data">
        <CoinData detail={detail} determineTimeFormat={determineTimeFormat}/>
      </div> */}
    </div>
  );
};

export default HistoryChart;
