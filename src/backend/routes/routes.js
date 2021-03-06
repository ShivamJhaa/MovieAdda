const express = require("express");
const router = express.Router();
const Movies = require("../model/movies");

router.get("/fetchmovies", async (req, res) => {
  try {
    const movies = await Movies.find();
    res.json(movies);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/movies/:id", async (req, res) => {
  try {
    const movies = await Movies.find({ id: req.params.id });
    res.json(movies);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/addmovies", async (req, res) => {
  try {
    const {
      id,
      name,
      posterLink,
      trailerLink,
      description,
      release,
      rating,
      duration,
    } = req.body;

    const movie = new Movies({
      id,
      name,
      posterLink,
      trailerLink,
      description,
      release,
      rating,
      duration,
    });
    const savedMovie = await movie.save();

    res.json(savedMovie);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;