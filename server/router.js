const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/coins')
  .get(controllers.getCryptoCurrency)

router
  .route('/trending')
  .get(controllers.getTrendingCurrency)

router
  .route('/coins/:id/market')
  .get(controllers.getMarket)

router
  .route('/market')
  .get(controllers.getMarket)

router
  .route('/users')
  .get(controllers.getUserStatus)


module.exports = router;