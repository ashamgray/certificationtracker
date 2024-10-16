const express = require('express');
const mongoose = require('./db'); // Import the database connection
const dotenv = require('dotenv');
const certificationsRouter = require('./routes/certifications');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/certifications', certificationsRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
