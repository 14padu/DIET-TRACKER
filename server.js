const express = require('express');
const connectDB = require('./config/db');
const personRoute = require('./route/PersonRoute');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("HomePage Of The App");
});

app.use('/api', personRoute); // Use book routes with prefix '/api'

app.listen(PORT, () => {
    console.log(`Server is running at the port http://localhost:${PORT}`);
});