const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const personRoute = require('./routes/PersonRoute');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/home", (req, res) => {
    res.send("HomePage Of The App");
});

// Person API Routes
app.use('/api/person', personRoute); 

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
});
