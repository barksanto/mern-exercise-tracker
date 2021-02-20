const express = require('express');
const cors = require('cors');

// help us connect to mongodb database
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

// this is the cors middleware - allows us to parse received and sending json
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.get('/', (req, res) => {
  res.status(200).json('Connected!')
})


const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

// whenever we use the route and /exercises or /users at the end, it will use tht router
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
})

