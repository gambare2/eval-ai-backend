const mongoose = require("mongoose");

const EvaluationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  repoUrl: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Evaluation", EvaluationSchema);
