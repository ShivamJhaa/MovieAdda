const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let Movies = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String
  },
  posterLink: {
    type: String
  },
  trailerLink: {
    type: String
  },
  description: {
    type: String
  },
  release: {
    type: String
  },
  rating: {
    type: String
  },
  duration: {
    type: String
  }
}, {
  collection: 'movies'
})
 
module.exports = mongoose.model('Movies', Movies)