require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

const { PORT, CORS_ORIGIN } = process.env;

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Welcome to /");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
