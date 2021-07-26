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
import Career from './components/Career/Career.jsx';
import Company from './components/Company/Company.jsx';
import Developers from './components/Developers/Developers.jsx';
import SignupAuth from './components/firebaseForms/SignupAuth.jsx';
import SigninAuth from './components/firebaseForms/SignInAuth.jsx';

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
          <Route path="/career" component={Career} />
          <Route path="/company" component={Company} />
          <Route path="/developers" component={Developers} />
          <Route path="/signup" component={SignupAuth} />
          <Route path="/signin" component={SigninAuth} />
        </Switch>
      </BrowserRouter>
    </WatchListContextProvider>
  </div>
);

export default App;
