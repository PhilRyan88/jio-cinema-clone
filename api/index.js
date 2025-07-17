const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 3000;

// Path to JSON file
const moviesFilePath = path.join(__dirname, "movies_data.json");

// Utility function to read the JSON file
function readMoviesData() {
  try {
    const data = fs.readFileSync(moviesFilePath, "utf8");
    return JSON.parse(data); // ✅ fixed JSON parse
  } catch (err) {
    console.error("Error reading movies data:", err);
    return []; // return empty array on failure
  }
}

// Route to get all movies
app.get("/movies", (req, res) => {
  const movies = readMoviesData();
  res.send(movies);
});

// Route to get movie by ID
app.get("/movies/:id", (req, res) => {
  const movies = readMoviesData();
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (movie) {
    res.send(movie);
  } else {
    res.status(404).json({ error: "Movie not found" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`🎬 Server running at http://localhost:${port}/movies`);
});
