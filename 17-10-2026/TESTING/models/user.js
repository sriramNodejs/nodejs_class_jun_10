const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // The "comment" is stored as a description for developers/documentation
    description: "Here to store the name of the user" 
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // Automatically converts the email to lowercase (replaces your setter)
    trim: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
    default: 'female'
  },
  phone: {
    type: Number,      // Use Number for numeric data, or String if you want to preserve leading zeros
    required: false,   // Change to true if the field is mandatory
    unique: true,      // Change to false if phone numbers do not need to be unique
    sparse: true       // Crucial: Allows multiple null/missing phone numbers despite being unique
  }
}, {
  timestamps: true    // Optional: Adds createdAt and updatedAt fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;
