const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const detailRoutes = require('./routes/detail');

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/yourdbname')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('Database connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', detailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});