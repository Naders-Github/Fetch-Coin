import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const LandingCoins = () => {
  const moreCoins = useSelector((state) => state.moreCoinsReducer.moreCoins);
  const trendingCoins = useSelector((state) => state.trendingCoinsReducer.trendingCoins);

  const handleMarket = () => {
    let marketAcc = 0;
    moreCoins.forEach((coin) => {
      marketAcc += coin.price_change_percentage_24h / moreCoins.length
    });
    return Math.round(marketAcc)
  };

  const handleHighestVolume = () => {
    let coinObj = moreCoins[0];
    let highestVolumeObj = {};
    let highestVolume;

    for (let key in coinObj) {
      highestVolume = coinObj.total_volume
    }

    moreCoins.forEach((coin) => {
      if (coin.total_volume > highestVolume) {
        highestVolumeObj = coin
      }
    });

    return highestVolumeObj;
  };

  const handleTrendingCoins = () => {
    let trendingCoinObj = {};
    trendingCoins.forEach((coin) => {
      trendingCoinObj = coin.item
    })
    return trendingCoinObj;
  }

  const currentMarket = handleMarket();
  const highestVolumeObj = handleHighestVolume();
  const trendingCoinObj = handleTrendingCoins();

  return (
    <div>
      <section>
        <div className='market-container'>
          {currentMarket < 0 ? (
            <div>
              In the past 24 hours Market is down
              <p className="red">{currentMarket}%</p>
            </div>
          ) : (
            <div>
              In the past 24 hours Market is up
              <p className="green">{currentMarket}%</p>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="split">
            <h3>Highest Volume(24)</h3>
            <span>
              <img className="landing-volume-image" src={highestVolumeObj.image} />
            </span>
              <span>{highestVolumeObj.name}</span>
              &nbsp;
              <span>${highestVolumeObj.current_price}</span>
              <br/>
              <span>{highestVolumeObj.total_volume}</span>
          </div>

          <div className="split">
            <div>
              <h3>Trending</h3>
              <img src={trendingCoinObj.small} />
              <p>{trendingCoinObj.name}</p>
              <p>{trendingCoinObj.symbol}</p>
              {trendingCoinObj.id === highestVolumeObj.id ? (
                <p>{highestVolumeObj.current_price}</p>
              ) : <p>hi</p>}
            </div>
          </div>
          <div className="split">
            <div>
              <h3>Popular</h3>
              {moreCoins.slice(0, 4).map((coin) => (
                <div key={coin.id}>
                  <img src={coin.image} alt="Popular Images"/>
                  <hr/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingCoins;