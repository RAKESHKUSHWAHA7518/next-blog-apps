const Post = require('../models/postModel');

async function getPostById(req, res) {
  try {
    const { id } = req.params; 
    console.log(id);
    // Extract the ID from request parameters
    const post = await Post.findById(id); // Fetch the post with the given ID
console.log(post);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching the post', error: error.message });
  }
}

module.exports = getPostById;
