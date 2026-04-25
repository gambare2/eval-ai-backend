const { analyzeWithCareerAI } = require("../services/careerai.services.js");
const axios = require("axios");
const FormData = require("form-data");
const Evaluation = require("../models/Evaluation.js");

const analyzeCareerAIController = async (req, res, next) => {
  try {
    const { repoUrl, resumeSkills, interestedField, userId } = req.body;

    if (!repoUrl) {
      return res.status(400).json({
        message: "repoUrl is required",
      });
    }

    const result = await analyzeWithCareerAI(repoUrl, resumeSkills || [], interestedField);

    // Save evaluation to DB if userId is provided
    if (userId) {
      try {
        const projectName = repoUrl.split('/').pop().replace('.git', '') || "Unknown Project";
        const score = result?.scores?.overall_score || result?.overall_score || 0;
        
        await Evaluation.create({
          userId,
          projectName,
          repoUrl,
          score
        });
      } catch (dbErr) {
        console.error("Failed to save evaluation to DB:", dbErr);
      }
    }

    return res.status(200).json({
      message: "CareerAI analysis completed",
      result,
    });
  } catch (error) {
    next(error);
  }
};

const uploadResumeController = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No PDF file uploaded" });
    }

    const AI_ENGINE_URL = process.env.AI_ENGINE_URL || "http://localhost:8000";

    const formData = new FormData();
    formData.append("file", req.file.buffer, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });

    if (req.body.interestedField) {
      formData.append("interested_field", req.body.interestedField);
    }

    const response = await axios.post(`${AI_ENGINE_URL}/upload-resume`, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    return res.status(200).json(response.data);
  } catch (error) {
    next(error);
  }
};

module.exports = { analyzeCareerAIController, uploadResumeController };