const axios = require("axios");

const analyzeWithCareerAI = async (repoUrl, resumeSkills = []) => {
  try {
    const AI_ENGINE_URL = process.env.AI_ENGINE_URL || "http://localhost:8000";

    const response = await axios.post(`${AI_ENGINE_URL}/analyze`, {
      repo_url: repoUrl,
      resume_skills: resumeSkills,
    });

    return response.data;
  } catch (err) {
    const message =
      err?.response?.data?.detail ||
      err?.response?.data?.message ||
      err.message ||
      "CareerAI Engine failed";

    throw new Error(message);
  }
};

module.exports = { analyzeWithCareerAI };