const express = require('express');
const app = express();
 
const MoviesRoute = express.Router();
let Movies = require('../model/movies');

// Get Movies
MoviesRoute.route('/movies/:id').get((req, res) => {
    Movies.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
module.exports = MoviesRoute;