import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const LandingCoins = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const coins = useSelector((state) => state.coinsReducer.coins);
  const trendingCoins = useSelector((state) => state.trendingCoinsReducer.trendingCoins);

  useEffect(() => {
    handleLoaded();
  }, [coins])

  const handleMarket = () => {
    let marketAcc = 0;
    coins.forEach((coin) => {
      marketAcc += coin.market_data.price_change_percentage_24h / coins.length
    });
    return Math.round(marketAcc)
  };

  const handleHighestVolume = () => {
    let coinObj = coins[0];
    let highestVolumeObj = { image: { thumb: ''} };
    let highestVolume;

    for (let key in coinObj) {
      highestVolume = coinObj.market_data.total_volume.usd;
    }

    for (let i = 1; i < coins.length; i++) {
      if (coins[i].market_data.total_volume.usd > highestVolume) {
        highestVolumeObj = coins[i];
      }
    }
    return highestVolumeObj;
  };

  const handleLoaded = () => {
    if (coins.length > 0) {
      setIsLoaded(true);
    }
  }

  const handleTrendingCoins = () => {
    let trendingCoinObj = {};
    trendingCoins.forEach((coin) => {
      trendingCoinObj = coin.item
    })
    return trendingCoinObj;
  }

  return (
    <div>
      {isLoaded ? (
        <div>
          <section>
            <div className='market-container'>
              {handleMarket() < 0 ? (
                <div>
                  In the past 24 hours Market is down
                  <p className="red">{handleMarket()}%</p>
                </div>
              ) : (
                <div>
                  In the past 24 hours Market is up
                  <p className="green">{handleMarket()}%</p>
                </div>
              )}
            </div>
          </section>
          <section>
            <div className="container">
              <div className="split">
                <h3>Highest Volume(24)</h3>
                <img className="landing-volume-image" src={handleHighestVolume().image.small} />
                <h3>{handleHighestVolume().name}</h3>
                <p>${handleHighestVolume().market_data.current_price.usd.toLocaleString()}</p>
                <br />
                <p>${handleHighestVolume().market_data.total_volume.usd.toLocaleString()}</p>
              </div>
              <div className="split">
                <div>
                  <h3>Trending</h3>
                  <img src={handleTrendingCoins().small} />
                  <p>{handleTrendingCoins().name}</p>
                  <p>{handleTrendingCoins().symbol}</p>
                </div>
              </div>
              <div className="split">
                <div>
                  <h3>Popular</h3>
                  {coins.slice(0, 4).map((coin) => (
                    <div key={coin.id}>
                      <img src={coin.image.small} alt="Popular Images" />
                      <p>{coin.name}</p>
                      <p>{coin.market_data.current_price.usd.toLocaleString()}</p>
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : <> Loading </>}
    </div>
  );
};

export default LandingCoins;