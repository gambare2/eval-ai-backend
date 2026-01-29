const express = require("express");
const router = express.Router();

router.get("/stats", (req, res) => {
  res.json({
    projects: 128,
    avgScore: 8.4,
    accuracy: 96,
    chart: [
      { name: "Mon", score: 7.2 },
      { name: "Tue", score: 8.1 },
      { name: "Wed", score: 8.5 },
      { name: "Thu", score: 9.0 },
      { name: "Fri", score: 8.7 },
    ],
  });
});

router.get("/recent", (req, res) => {
  res.json([
    { name: "Portfolio Website", score: 9.1 },
    { name: "E-commerce App", score: 8.0 },
    { name: "AI Chatbot", score: 8.6 },
  ]);
});

module.exports = router;
