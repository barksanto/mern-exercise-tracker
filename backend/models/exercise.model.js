const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true }
},
  {
    timestamps: true
  });
// need to add api endpoint routes so the server can be used to perform the CRUD operations
const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;