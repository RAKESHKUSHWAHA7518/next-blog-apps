'use client'
import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
    const [data,setData] = useState(null);

    const fetchBlogData =  async() => {
console.log(params.id);

        const response = await axios.get(`http://localhost:8080/api/getPostById/${params.id}`)
        console.log(response);
        
        setData(response.data);

        //  for(let i=0;i<blog_data.length; i++)
        //  {
        //     if(Number(params.id)===blog_data[i].id) {
        //         setData(blog_data[i]);
                 
        //         console.log(blog_data[i]); 
        //         break;
                
                
        //     }
        //  }

    }
    useEffect(()=>{
        fetchBlogData();
    },[])
  return (data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Link href='/'>
            <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
            </Link>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
                Get started <Image src={assets.arrow} alt=''/>
                </button>
        </div> 
        <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
            {/* <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} width={60} height={60} alt=''/> */}
            <img src= {data.image}  alt="Description of the image"  className="w-2/3 h-1/3 mx-40 rounded-lg mb-4" />
            <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        {/* <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt=''/> */}
        <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
        <p>{data.content}</p>
         
          
    </div>
    <Footer />
    </>:<></>
  )
}

export default page