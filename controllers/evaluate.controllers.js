const extractFeaturesFromGitHub = require("../services/github.services");
const runAIEvaluation = require("../services/ai.services");

async function evaluateProject(req, res) {
  try {
    console.log("📥 Incoming request:");
    console.log(JSON.stringify(req.body, null, 2));

    const githubUrl = req.body?.githubUrl;

    if (!req.body || !githubUrl) {
      return res.status(400).json({
        error: "githubUrl is required",
        receivedBody: req.body
      });
    }
    

    console.log("🔍 Extracting features from GitHub...");
    const features = await extractFeaturesFromGitHub(githubUrl);

    console.log("🧠 Extracted ML features:");
    console.log(JSON.stringify(features, null, 2));

    // 2️⃣ Run ML prediction
    console.log("🚀 Sending features to ML model...");
    const prediction = await runAIEvaluation(features);

    // 3️⃣ Final response
    return res.json({
      status: "success",
      githubUrl,
      features,
      prediction,
    });

  } catch (error) {
    console.error("🔥 Evaluation failed");
    console.error(error.message);

    return res.status(500).json({
      error: "AI evaluation failed",
      details: error.message,
    });
  }
}

module.exports = { evaluateProject };
