const express = require("express");
const { analyzeCareerAIController } = require("../controllers/careerai.controllers.js");

const router = express.Router();

router.post("/careerai/analyze", analyzeCareerAIController);

module.exports = router;
