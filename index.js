const express = require("express");
const cors = require("cors");

const evaluateRoutes = require("./routes/evaluate.routes.js");
const dashboardRoutes = require("./routes/dashboard.routes.js");
const careerAiRoutes = require("./routes/careerai.routes.js");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// Existing routes
app.use("/api", evaluateRoutes);
app.use("/api/dashboard", dashboardRoutes);

// New CareerAI route
app.use("/api", careerAiRoutes);

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
