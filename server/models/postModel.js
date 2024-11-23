const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  authorID: {  
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'user',  
    required: true 
  },
   
  image: { type: String, required: true },
   
},{timestamps:true});

module.exports = mongoose.model('Post', postSchema);
