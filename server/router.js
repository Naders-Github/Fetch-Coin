const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/coins')
  .get(controllers.getCryptoCurrency)

router
  .route('/coins/:id/market')
  .get(controllers.getMarket)

router
  .route('/market')
  .get(controllers.getMarket)

module.exports = router;