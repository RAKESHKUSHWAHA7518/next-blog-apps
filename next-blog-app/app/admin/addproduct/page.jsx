 

'use client';
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const page = () => {
  const [image, setImage] = useState(null);
  const username = localStorage.getItem('userID');
    console.log(username);
  const [data, setData] = useState({
    title: '',
    content: '',
     author: 'Startup',
    image:'',
    authorID:username

  });

  

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setData((prev) => ({ ...prev, [name]: value }));
  // };
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
  
    if (type === "file") {
      // If the input type is file, update the state with the file object
      setData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      // Otherwise, update the state with the regular value
      setData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.description);
    formData.append('author', data.category);
    if (image) formData.append('image', image);

    try {
      console.log(data);
      
      const response = await axios.post('http://localhost:8080/api/post', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response);
      
      if (response.status==201) {
        toast.success('Blog added successfully!');
        setData({ title: '', content: '', author: ' ' });
        setImage(null);
      }  
    } catch (error) {
      console.error('Error submitting blog:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Thumbnail</label>
        <input
          type="file"
          name='image'
          accept="image/*"
          onChange={handleInputChange}
          className="block w-full text-sm text-gray-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleInputChange}
          className="block w-full p-2 border rounded"
          placeholder="Enter blog title"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">content</label>
        <textarea
          name="content"
          value={data.content}
          onChange={handleInputChange}
          className="block w-full p-2 border rounded"
          placeholder="Write the description"
          rows="4"
          required
        />
      </div>

      {/* <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Category</label>
        <select
          name="category"
          value={data.category}
          onChange={handleInputChange}
          className="block w-full p-2 border rounded"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
      </div> */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Author Name</label>
        <input
          type="text"
          name="author"
          value={data.author}
          onChange={handleInputChange}
          className="block w-full p-2 border rounded"
          placeholder="Enter blog title"
          required
        />
      </div>

      <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded">
        Add Blog
      </button>
    </form>
  );
};

export default page;

