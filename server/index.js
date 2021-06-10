const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

// const router = require('./router.js')

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/dist')));
// app.use('/api', router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})