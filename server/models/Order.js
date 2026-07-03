const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    qty: { type: Number, required: true },
    price: { type: Number, required: true }
  }],
  shippingInfo: {
    name: String, phone: String, address: String, city: String, zip: String
  },
  paymentMethod: { type: String, enum: ['card', 'cod'], default: 'card' },
  paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  status: { type: String, enum: ['processing', 'shipped', 'delivered', 'cancelled'], default: 'processing' },
  total: { type: Number, required: true },
  tva: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
