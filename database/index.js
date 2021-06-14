const { Client } = require('pg');
const config = require('../config/config.js');

const client = new Client({
  user: config.user,
  host: 'localhost',
  database: config.database,
  password: config.password,
  port: 5432,
});

client.connect((err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Successfuly connected to the databse');
  }
});

module.exports = client;