require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./src/router');

const app = express();

const port = process.env.POST || 5000;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', router);

app.listen(port, () => console.log(`Your server running on port ${port}`));
