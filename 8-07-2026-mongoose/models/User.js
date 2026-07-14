const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    age: {
      type: Number,
      min: 18,
      max: 120,
      validate: {
        validator: function (value) {
          return value % 2 === 0;
        },
        message: "Age must be an even number",
      },
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("USER", userSchema);
module.exports = User;
