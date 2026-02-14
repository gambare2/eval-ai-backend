const { analyzeWithCareerAI } = require("../services/careerai.services.js");

const analyzeCareerAIController = async (req, res, next) => {
  try {
    const { repoUrl, resumeSkills } = req.body;

    if (!repoUrl) {
      return res.status(400).json({
        message: "repoUrl is required",
      });
    }

    const result = await analyzeWithCareerAI(repoUrl, resumeSkills || []);

    return res.status(200).json({
      message: "CareerAI analysis completed",
      result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { analyzeCareerAIController };