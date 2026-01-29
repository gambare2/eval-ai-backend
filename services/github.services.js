const axios = require("axios");

const AI_ENGINE_URL = "http://127.0.0.1:8001/extract/features";

async function extractFeaturesFromGitHub(repoUrl) {
  const response = await axios.post(AI_ENGINE_URL, {
    repo_url: repoUrl,
  });

  return response.data.features;
}

module.exports = extractFeaturesFromGitHub;
