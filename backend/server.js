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
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
})

