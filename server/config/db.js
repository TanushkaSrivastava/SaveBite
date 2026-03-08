const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect("your_mongodb_connection_string")

    console.log("MongoDB Connected")

  } catch (error) {
    console.error("Database connection failed:", error)
    process.exit(1)
  }
}

module.exports = connectDB