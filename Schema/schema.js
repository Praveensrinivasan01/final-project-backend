const mongoose = require("mongoose");

const firstSchema = new mongoose.Schema({
  name: { type: String, uppercase: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: Number },
  password: { type: String },
});

module.exports = mongoose.model("userModel", firstSchema);
