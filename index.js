const express = require('express');
const cors = require('cors');
const app = express();

// Local Imports
const connectDb = require('./db.js');
const certificateRoutes = require('./routes/certificate.routes');
const projectRoutes = require('./routes/project.routes');
const resumeRoutes = require('./routes/resume.routes');
// const errorMiddleware = require('./middleware/errorMiddleware');

// Configuration
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200,
};

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors(corsOptions));
app.use(express.json()); // Use express.json() instead of body-parser
app.use('/api/certificates', certificateRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/resume', resumeRoutes);

// Global Error Handling Middleware (if implemented)
// app.use(errorMiddleware);

// Database Connection and Server Startup
connectDb()
  .then(() => {
    console.log('Database connection succeeded.');
    app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}.`));
  })
  .catch((err) => console.log('Database connection failed:', err));
