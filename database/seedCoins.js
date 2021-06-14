const client = require('./index.js');

const tableName = 'coins'
const createTable = `
  DROP TABLE IF EXISTS ${tableName};
  CREATE TABLE IF NOT EXISTS ${tableName} (
    id SERIAL NOT NULL PRIMARY KEY,
    symbol TEXT NOT NULL,
    name TEXT NOT NULL,
    image TEXT,
    current_price INT NOT NULL,
    market_cap INT NOT NULL,
    market_cap_rank INT NOT NULL,
    fully_diluted_valuation INT NOT NULL,
    total_volume INT NOT NULL,
    high_24th INT NOT NULL,
    low_24th INT NOT NULL,
    price_change INT NOT NULL,
    price_change_percentage_24th INT NOT NULL,
    market_cap_change_24th INT NOT NULL,
    market_cap_change_percentage_24th INT NOT NULL,
    circulating_supply INT NOT NULL,
    total_supply INT NOT NULL,
    max_supply INT NOT NULL,
    ath INT NOT NULL,
    ath_change_percentage INT NOT NULL,
    ath_date DATE,
    atl INT NOT NULL,
    atl_change_percentage INT NOT NULL,
    atl_date DATE,
    last_updated DATE
  );`

client.query(createTable)
    .then(() => {
      console.log(`Table ${tableName} successfully created!`)
    })
    .catch((err) => console.error(err));