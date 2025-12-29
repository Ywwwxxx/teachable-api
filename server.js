// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Son tahmini hafızada tut
let lastPrediction = { label: null, confidence: 0 };

// Tarayıcıdan tahmin alma
app.post("/predict", (req, res) => {
  lastPrediction = req.body; // { label: "attack", confidence: 0.87 }
  res.json({ ok: true });
});

// Roblox'un tahmini çekmesi
app.get("/predict", (req, res) => {
  res.json(lastPrediction);
});

// Sunucuyu başlat
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
});
