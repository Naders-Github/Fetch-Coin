import React from "react";
import AddCoin from "../components/home/AddCoin";
import Watch from "../components/home/Watch";

const CoinSummaryPage = () => {
  return (
    <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
      <AddCoin />
      <Watch />
    </div>
  );
};

export default CoinSummaryPage;
