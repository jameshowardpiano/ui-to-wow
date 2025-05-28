require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

app.get("/api/places", async (req, res) => {
  const { query } = req.query;
  try {
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
      query
    )}&key=${GOOGLE_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch from Google Places API" });
  }
});

app.listen(3001, () => console.log("Proxy server running on port 3001"));