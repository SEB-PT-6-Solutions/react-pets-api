const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');

// Controllers
const petsCtrl = require('./controllers/pets');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// Routes go here
app.use('/pets', petsCtrl);

app.listen(3000, () => {
  console.log('The express app is ready!');
});
