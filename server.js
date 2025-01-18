const express = require('express');
const connectDB = require('./config/db');
const cors = require("cors");
const diets = require("./route/PersonRoute");
const path = require('path')
require("dotenv").config({ path: "./config.env" })
const PersonRoutes = require('./route/PersonRoute');




// Connect to MongoDB
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
//app.use("/api", Person)

// SERVE STATIC FILES
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Express server running on port ${port}`));
