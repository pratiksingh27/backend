const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan'); 
require('dotenv').config();


const app = express();

// Middleware
//work on routing
app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://frontend-phi-six-79.vercel.app' || 'http://localhost:5173', 
  methods: ['GET', 'POST'],
}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Routes
const apiRoutes = require('./routes/apiRoutes');
app.use('/bfhl', apiRoutes);


app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

//Handling Middleware
app.use((err, req, res, next) => {
  // console.error(err.stack); 
  res.status(500).json({
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'production' ? undefined : err.message,
  });
});

// Starting Server for run
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
