import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home/Home';
import { WatchListContextProvider } from "./context/watchListContext";
import CoinDetails from "./components/coinDetails/CoinDetails";
import LandingPage from './components/landing/LandingPage';
import Coins from './components/coins/Coins';
import Notifications from './components/notifications/Notifications';
import Trade from './components/trade/Trade';


const App = () => (
  <div className="main">
    <WatchListContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/home" component={Home} />
          <Route path="/coins/:id" component={CoinDetails} />
          {/* <Route path="/details" component={CoinDetails} /> */}
          <Route path="/coins" component={Coins} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/trade" component={Trade} />
        </Switch>
      </BrowserRouter>
    </WatchListContextProvider>
  </div>
);

export default App;

// import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import CoinDetails from "./components/coinDetails/CoinDetails";
// // import Header from "./components/Header";
// import LandingPage from './components/landing/LandingPage';
// import Coins from './components/coins/Coins';
// import Notifications from './components/notifications/Notifications';
// import Trade from './components/trade/Trade';
// import "./App.css";
// import { WatchListContextProvider } from "./context/watchListContext";

// const App = () => {
//   return (
//     <div className="container">
//       <WatchListContextProvider>
//         <BrowserRouter>
//           <Switch>
//             {/* <Header /> */}
            // <Route path="/" component={LandingPage} />
            // <Route path="/home" component={Home} />
            // <Route path="/coins/:id" component={CoinDetails} />
            // <Route path="/home" component={Home} />
            // {/* <Route path="/details" component={CoinDetails} /> */}
            // <Route path="/coins" component={Coins} />
            // <Route path="/notifications" component={Notifications} />
            // <Route path="/trade" component={Trade} />
//           </Switch>
//         </BrowserRouter>
//       </WatchListContextProvider>
//     </div>
//   );
// };

// export default App;

