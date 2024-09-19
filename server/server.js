const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const agencyRoutes = require('./routes/agencyRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');

dotenv.config();
connectDB();
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/agencyAggregator';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

const app = express();
app.use(express.json());
const corsOptions = {
    origin : ['http://localhost:3000', 'http://localhost:3001'],
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));


app.use('/api/agencies', agencyRoutes); 
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);

// Default route for testing the server is running
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
