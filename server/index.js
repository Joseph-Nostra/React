require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Pusher = require('pusher');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Pusher setup
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID || "mock",
  key: process.env.VITE_PUSHER_KEY || "mock",
  secret: process.env.PUSHER_SECRET || "mock",
  cluster: process.env.VITE_PUSHER_CLUSTER || "mock",
  useTLS: true
});

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/eshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error', err));

// Routes
app.get('/', (req, res) => res.send('API Running'));

// Realtime order hook example
app.post('/api/orders/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  // Trigger pusher event
  pusher.trigger('orders-channel', 'status-update', {
    orderId: id,
    status: status,
    message: `Order #${id} has been ${status}`
  });
  res.json({ success: true, message: 'Status updated and notification sent' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
