const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://AbishekM:Abishek123@cluster0.5m9yy.mongodb.net/Blood-Group")
        console.log(`Connected to Blood Bank Database ${mongoose.connection.host}`.bgYellow.white)
    } catch (error) {
        console.log(`MongoDB DB error ${error}`.bgRed.white);
    }
}

module.exports = connectDB;