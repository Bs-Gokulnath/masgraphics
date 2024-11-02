require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

// Retrieve MongoDB connection string from environment variables
const mongoString = process.env.DATABASE_URL;

// Middleware to parse JSON
app.use(express.json());

// Use the routes
app.use('/mg', routes);

// Connect to MongoDB
mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database Connected');
    })
    .catch((error) => {
        console.error('Database Connection Error:', error);
    });

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}`);
});
