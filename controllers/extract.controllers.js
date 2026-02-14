const axios = require("axios");

const extractRepoFeaturesController = async (req, res) => {
  try {
    console.log("HEADERS:", req.headers);
    console.log("BODY:", req.body);

    const repoUrl = req.body?.repoUrl;

    if (!repoUrl) {
      return res.status(400).json({
        message: "repoUrl is required",
        receivedBody: req.body,
      });
    }

    const AI_ENGINE_URL = process.env.AI_ENGINE_URL || "http://localhost:8001";

    const response = await axios.post(`${AI_ENGINE_URL}/extract/features`, {
      repo_url: repoUrl,
    });

    return res.status(200).json(response.data);
  } catch (error) {
    console.error("❌ Extract features failed:", error?.message);

    return res.status(400).json({
      message: "Failed to extract repo features",
      error:
        error?.response?.data?.detail ||
        error?.message ||
        "Extraction failed",
    });
  }
};

module.exports = { extractRepoFeaturesController };
