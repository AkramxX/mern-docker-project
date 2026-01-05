const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config();
colors.enable();

const Anim = require("./database/anim.model");
const connect = require("./database/connect");

const app = express();

// CORS
app.use(
  cors({
    origin: "*",
  })
);

// JSON body parser
app.use(express.json());

// ======== ROUTES ========

// Test route
app.get("/", (req, res) => {
  console.log("Hello World!".rainbow);
  res.send("Hello World!");
});

// Get all anime
app.get("/api/anime", async (req, res) => {
  console.log("GET /api/anime HIT".cyan);

  try {
    const anime = await Anim.find();
    console.log(`Fetched ${anime.length} items`.green);
    res.json(anime);
  } catch (err) {
    console.error("Error fetching anime:".red, err);
    res.status(500).json({ error: "Failed to fetch anime" });
  }
});

// Create anime
app.post("/api/anime", async (req, res) => {
  console.log("POST /api/anime HIT".magenta);
  console.log("Request body:", req.body);

  try {
    const anime = new Anim(req.body);
    const saved = await anime.save();

    console.log("Anime saved successfully:".green, saved);
    res.json(saved);
  } catch (err) {
    console.error("Error saving anime:".red, err);
    res.status(500).json({ error: "Failed to save anime", details: err });
  }
});

// Start server AFTER DB connection
const startServer = async () => {
  try {
    await connect(); // DB first
    console.log("MongoDB connected!".green);

    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`.yellow);
    });

  } catch (err) {
    console.error("Failed to start server".red, err);
    process.exit(1);
  }
};

startServer();
