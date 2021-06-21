import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home/Home';
import { WatchListContextProvider } from "./context/watchListContext";
import CoinDetails from "./components/coinDetails/CoinDetails";
import Landing from './components/landing/Landing';
import Coins from './components/coins/Coins';
import Notifications from './components/notifications/Notifications';
import Trade from './components/trade/Trade';
import Profile from './components/profile/Profile.jsx';


const App = () => (
  <div className="main">
    <WatchListContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/home" component={Home} />
          <Route path="/coins/:id" component={CoinDetails} />
          <Route path="/coins" component={Coins} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/trade" component={Trade} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </WatchListContextProvider>
  </div>
);

export default App;
