
const postModel = require('../models/postModel');
const Post = require('../models/postModel');
   async function getAllPost  (req, res)  {
    try {
      const post = await Post.find(); // Fetch all employees from the database
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching employees', error: error.message });
    }
  };

  module.exports = getAllPost;