const express = require("express");
const {evaluateProject} = require("../controllers/evaluate.controllers.js")

const router = express.Router();

router.post("/evaluate", evaluateProject);

module.exports = router