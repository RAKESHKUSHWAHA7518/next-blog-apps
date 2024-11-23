const Post = require('../models/postModel');
 const{ uploadoncloudinary}= require('../config/cloudnary')


 
async function createPost (req, res)  {
  try {
    const { title, content,  author,authorID} = req.body;

    console.log(authorID);
    
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }

    const localFilePath = req.file.path;
    console.log("Rakesh",localFilePath);

    const avatar=  await  uploadoncloudinary(localFilePath)

    console.log("Rakesh",avatar);
    

    const newPost = new Post({
      title,
      content,
      author,
      authorID,
      image:avatar.url,
    });

     const data= await newPost.save();
    res.status(201).json({
        data:data,
         message: 'Post created successfully' });
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: 'Failed to create Post', error });
  }
};

module.exports = createPost;
