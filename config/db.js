const mongoose = require('mongoose');

//connect to database
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://padmajapradhan44:padmajapradhan44@cluster0.2k2s8.mongodb.net/diet?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connected to MongoDB');
    }
    catch(err){
        console.error("Failed to connect to MongoDB",err);
        process.exit(1);
    }
};

module.exports = connectDB;