require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("MongoDB connection Success");
    } catch (error) {
        console.error("MongoDB connection Failed");
        process.exit(1);
    }
}
module.exports = connectDB;