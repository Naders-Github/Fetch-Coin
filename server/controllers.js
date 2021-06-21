const axios = require('axios');
const db = require('../database/index.js');

const controllers = {
  getCryptoCurrency: (req, res) => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => console.error(err));
  },
  getTrendingCurrency: (req, res) => {
    axios.get(`https://api.coingecko.com/api/v3/search/trending`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => console.error(err));
  },
  getMarket: (req, res) => {
    axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=days`)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => console.error(err));
  },
  getUserStatus: (req, res) => {
    axios.get(`https://api.coingecko.com/api/v3/status_updates`)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => console.error(err));
  },
};

module.exports = controllers;