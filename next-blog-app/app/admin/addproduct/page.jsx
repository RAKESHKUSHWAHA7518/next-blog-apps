// 'use client'
// import { assets } from '@/Assets/assets'
// import axios from 'axios'
// import Image from 'next/image'
// import React, { useState } from 'react'
// import { toast } from 'react-toastify'

// const page = () => {
//     const [image,setImage] = useState(false);
//     const [data,setData] = useState({
//         title:"",
//         description:"",
//         category:"Startup",
//         author:"Alex Bennett",
//         authorImg:"/author_img.png"
//     })
//     const onChangeHandler = (event) =>{
//         const name = event.target.name;
//         const value = event.target.value;
//         setData(data=>({...data,[name]:value}));
//         console.log(data);
        
//     }

//     const onSubmitHandler = async (e)=>{
//           e.preventDefault();
//           const formData = new FormData();
//           formData.append('title',data.title);
//           formData.append('description',data.description);
//           formData.append('category', data.category);
//           formData.append('author',data.author);
//           formData.append('authorImg',data.authorImg);
//           formData.append('image',image);
//           const response = await axios.post('/api/blog',formData);
//         //   console.log(response);
          
//           if(response.data.success) {
//             toast.success(response.data.msg)
//             setImage(false);
//             setData({
//                 title:"",
//                 description:"",
//                 category:"Startup",
//                 author:"Alex Bennett",
//                 authorImg:"/author_img.png"
//             })
//           } 
//           else {
//             toast.error("Error");
//           }
//     }
//   return (
//      <>
//      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
//         <p className='text-xl'>Upload thumbnail</p>
//         <label htmlFor="image">
//             <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} alt=''/>
//         </label>
//         <input onChange={(e) =>setImage(e.target.files[0])} type="file" id='image' hidden required/>
//         <p className='text-xl mt-4'>Blog title</p>
//         <input name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='Type here' required />
//         <p className='text-xl mt-4'>Blog Description</p>
//         <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='write content here' rows={6} required />
//          <p className='text-xl mt-4'>Blog category</p> 
//          <select name="category" onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
//             <option value="Startup">Startup</option>
//             <option value="Technology">Technology</option>
//             <option value="Lifestyle">Lifestyle</option>
//             </select> 
//             <br></br>
//             <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>ADD</button>   
//      </form>
//      </>
//   )
// }

// export default page


// 'use client';
// import React, { useState } from 'react';
// import axios from 'axios';

// const page = () => {
//   const [image, setImage] = useState(null);
//   const [data, setData] = useState({
//     title: '',
//     description: '',
//     category: 'Startup',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('title', data.title);
//     formData.append('description', data.description);
//     formData.append('category', data.category);
//     if (image) {
//       formData.append('image', image);
//     }

//     try {
//       const response = await axios.post('/api/blog', formData);
//       if (response.data.success) {
//         alert('Blog added successfully!');
//         setImage(null);
//         setData({ title: '', description: '', category: 'Startup' });
//       } else {
//         alert('Failed to add the blog.');
//       }
//     } catch (error) {
//       console.error('Error submitting blog:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
//       <label className="block mb-2 text-lg font-medium">Thumbnail</label>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => setImage(e.target.files[0])}
//         className="mb-4"
//         required
//       />

//       <label className="block mb-2 text-lg font-medium">Title</label>
//       <input
//         type="text"
//         name="title"
//         value={data.title}
//         onChange={handleInputChange}
//         className="w-full px-3 py-2 border rounded mb-4"
//         placeholder="Enter blog title"
//         required
//       />

//       <label className="block mb-2 text-lg font-medium">Description</label>
//       <textarea
//         name="description"
//         value={data.description}
//         onChange={handleInputChange}
//         className="w-full px-3 py-2 border rounded mb-4"
//         rows="4"
//         placeholder="Write the description"
//         required
//       />

//       <label className="block mb-2 text-lg font-medium">Category</label>
//       <select
//         name="category"
//         value={data.category}
//         onChange={handleInputChange}
//         className="w-full px-3 py-2 border rounded mb-4"
//       >
//         <option value="Startup">Startup</option>
//         <option value="Technology">Technology</option>
//         <option value="Lifestyle">Lifestyle</option>
//       </select>

//       <button
//         type="submit"
//         className="w-full px-3 py-2 bg-blue-600 text-white rounded"
//       >
//         Add Blog
//       </button>
//     </form>
//   );
// };

// export default page;  

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

