require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

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

app.get("/", (req, res) => {
  res.send("API is running.");
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Proxy server running on port 3001")
});