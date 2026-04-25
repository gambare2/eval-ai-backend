const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    
    // Optional: retry logic or keep server alive
    // setTimeout(connectDB, 5000); // retry after 5 sec
  }
};

module.exports = connectDB;