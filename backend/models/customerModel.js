const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    income: {
      type: Number, // Corrected from 'number' to 'Number'
      required: true,
    },
    creditscore: {
      type: Number, // Corrected from 'number' to 'Number'
      required: true,
    },
    ammount: {
      type: Number, // Corrected from 'number' to 'Number'
      required: true,
    },
      status: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema); // Changed model name to singular "User"
