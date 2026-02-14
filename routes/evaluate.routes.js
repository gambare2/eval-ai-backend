const express = require("express");
const router = express.Router();

const { extractRepoFeaturesController } = require("../controllers/extract.controllers.js");

const { evaluateProject } = require("../controllers/evaluate.controllers.js");

router.post("/extract/features", extractRepoFeaturesController);

router.post("/evaluate", evaluateProject);

module.exports = router;
