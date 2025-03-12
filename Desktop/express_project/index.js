require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3500;
const dbUrl = process.env.Database_URL;

mongoose.connect(dbUrl)
.then(() => console.log('Connected to database'))
.catch(err => console.error(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
