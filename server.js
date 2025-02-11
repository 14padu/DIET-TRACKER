const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const personRoute = require('./route/PersonRoute');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// CORS Middleware (Fixes Unauthorized Request Issues)
const corsOptions = {
    origin: '*', // Allow all origins (for testing only)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));
app.use(express.json()); // Middleware to parse JSON

// Test Route
app.get("/home", (req, res) => {
    res.send("🏠 HomePage Of The App");
});

// Person API Routes
app.use('/api/person', personRoute);


// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
});





// {*https://5000-14padu-diettracker-az0d7vyurd8.ws-us117.gitpod.io/api/person*}