const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const GOOGLE_API_KEY = "AIzaSyBOohfd99PLQcHmNAFWJJXX6OXZ7LY_bP8"; // Replace with your actual API key

app.get("/api/search", async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/place/textsearch/json",
      {
        params: {
          query,
          key: GOOGLE_API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch from Google Places API" });
  }
});

app.listen(3001, () => console.log("Proxy server running on port 3001"));