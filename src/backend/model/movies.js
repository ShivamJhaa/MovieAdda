const mongoose = require("mongoose");
const { Schema } = mongoose;
let MoviesSchema = new Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  posterLink: {
    type: String,
  },
  trailerLink: {
    type: String,
  },
  description: {
    type: String,
  },
  release: {
    type: String,
  },
  rating: {
    type: String,
  },
  duration: {
    type: String,
  },
});

module.exports = mongoose.model("movies", MoviesSchema);