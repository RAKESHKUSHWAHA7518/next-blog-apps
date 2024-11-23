const mongoose = require('mongoose');

  async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://mukesh76:123456MK@cluster0.pvq3ze1.mongodb.net/blog')

        console.log("connectDB");
        
    } catch (err) {
        console.log(err);
        
    }
 }

 module.exports = connectDB;