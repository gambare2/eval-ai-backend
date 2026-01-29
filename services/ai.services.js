const axios = require("axios");

// ✅ Correct unified prediction endpoint
const AI_ENGINE_URL = "http://127.0.0.1:8001/predict";

async function runAIEvaluation(features) {
  try {
    console.log("➡️ Sending features to AI Engine (/predict):");
    console.log(JSON.stringify(features, null, 2));

    const response = await axios.post(
      AI_ENGINE_URL,
      features,
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    console.log("⬅️ AI Engine response:");
    console.log(JSON.stringify(response.data, null, 2));

    return response.data;

  } catch (error) {
    console.error("🔥 AI ENGINE ERROR");

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    } else {
      console.error("Message:", error.message);
    }

    throw error;
  }
}

module.exports = runAIEvaluation;
