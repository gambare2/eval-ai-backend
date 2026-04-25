const express = require("express");
const multer = require("multer");
const { analyzeCareerAIController, uploadResumeController } = require("../controllers/careerai.controllers.js");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/careerai/analyze", analyzeCareerAIController);
router.post("/careerai/upload-resume", upload.single("file"), uploadResumeController);

module.exports = router;
