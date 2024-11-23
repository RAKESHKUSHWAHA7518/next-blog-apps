 
const Post = require('../models/postModel');

async function getPostsByUserId(req, res) {
  try {
    const { id    } = req.params; 

    console.log("Rakesh author",id);
    // Extract the user ID from request parameters
    const posts = await Post.find({ authorID:id }); // Find posts with the given user ID
    // const posts = await Post.find(id ); 
    if (posts.length === 0) {
      return res.status(404).json({ message: 'No posts found for this user' });
    }

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error: error.message });
  }
}

module.exports = getPostsByUserId;
