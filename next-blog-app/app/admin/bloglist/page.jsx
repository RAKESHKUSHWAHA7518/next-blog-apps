'use client'
import BlogTableItem from '@/Components/AdminComponent/BlogTableItem'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const page = () => {

    // console.log(user);
    
    const [blogs,setBlogs] = useState([]);
    const username = localStorage.getItem('userID');
    console.log(username);
    
    const fetchBlogs = async () => {
        // const responseuser = await axios.get("http://localhost:8080/api/user-details")
        // console.log(responseuser.data);
        
        const response = await axios.get(`http://localhost:8080/api/getPostsByUserId/${username}`);
        console.log(response);
        
        setBlogs(response.data);
    }

    // const deleteBlog = async (mongoId) => {
    //     const responde = await axios.delete('/api/blog',{
    //         params:{
    //             id:mongoId
    //         }
    //     })
    //     toast.success(response.data.msg);
    //     fetchBlogs()
    // }

    useEffect(()=> {
       fetchBlogs()
    },[])

  return (
     <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
        <h1>All blogs</h1>
        <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
            <table className='w-full text-sm text-gray-500'>
                <thead className='text-sm text-gray-700 text-left uppercase bg-gray-50'>
                    <tr>
                        <th className='hidden sm:block px-6 py-3'>
                            Auther name 
                        </th>
                        <th className=' px-6 py-3'>
                             Blog Title 
                        </th>
                        <th className=' px-6 py-3'>
                             Date
                        </th>
                        {/* <th className='  px-6 py-3'>
                            Action
                         </th> */}
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((item,index)=>{
                        return  <BlogTableItem key={index} mongoId={item._id} title={item.title} author={item.author} authorImg={item.authorImg} date={item.createdAt}  />
                    })}
                   
                </tbody>
            </table>
        </div>
     </div>
  )
}

export default page 
 
 