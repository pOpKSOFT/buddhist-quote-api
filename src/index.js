const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const quotesRouter = require('./routes/quotes');

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(helmet({
    contentSecurityPolicy: false // Disable CSP for development
})); // Security headers
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Logging
app.use(express.json()); // Parse JSON bodies

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/api/quotes', quotesRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
}); 