const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // References the User document id
    ref: 'User',
    required: true
  },
  totalAmount: {
    type: Number, // Mongoose uses Number for decimals; you can handle rounding in your app logic
    required: true,
    default: 0.00
  }
}, {
  timestamps: true // Optional: Adds createdAt and updatedAt tracking
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;