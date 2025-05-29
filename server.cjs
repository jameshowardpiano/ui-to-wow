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
    // 1. Text search to get places
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/place/textsearch/json",
      {
        params: {
          query,
          key: GOOGLE_API_KEY,
        },
      }
    );

    // 2. For each place, fetch details (including phone number)
    const places = response.data.results;
    const detailedPlaces = await Promise.all(
      places.map(async (place) => {
        try {
          const detailsRes = await axios.get(
            "https://maps.googleapis.com/maps/api/place/details/json",
            {
              params: {
                place_id: place.place_id,
                fields: "name,formatted_address,formatted_phone_number,international_phone_number,rating",
                key: GOOGLE_API_KEY,
              },
            }
          );
          // Merge details into the original place object
          return {
            ...place,
            ...detailsRes.data.result,
          };
        } catch (err) {
          // If details fetch fails, return the original place data
          return place;
        }
      })
    );

    res.json({ results: detailedPlaces });
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