"use client";
import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
 
import React from 'react'
import toast from 'react-hot-toast'

const Sidebar = () => {
 const router= useRouter()
  const handleUserLogout = async()=>{
    const response = await axios.get('http://localhost:8080/api/userLogout',{
    
        withCredentials: true  
      
    })
    console.log(response);
    
    // setOpenUserMenu(false)
    toast(response?.data.message)
    // Router.push("/login")
    router.push('/')
}
  return (
    <div className='flex flex-col bg-slate-100'>
         <div className='px-2 sm:pl-14 py-3 border border-black'>
          <Image src={assets.logo}  width={120} alt=" "/>
            </div>
            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
                <div className='w-[50%] sm:w-[80%] absolute right-0'>
                <Link href='/' className=' mt-5 flex item-center border border-black gap-3 font-medium pc-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
<Image src={assets.blog_icon} alt=""/><p> Home </p>

</Link>
                <Link href='/admin/addproduct' className='flex item-center border border-black gap-3 font-medium pc-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
<Image src={assets.add_icon} alt=""/><p>Add blogs </p>

</Link>

<Link href='/admin/bloglist' className=' mt-5 flex item-center border border-black gap-3 font-medium pc-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
<Image src={assets.blog_icon} alt=""/><p> Blog List </p>

</Link>
<div className=' mt-5 flex item-center border border-black gap-3 font-medium pc-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'onClick={handleUserLogout}>
<Image src={assets.email_icon} alt="" onClick={handleUserLogout}/><p>Logout </p>

</div>
                </div>

            </div>
            </div>
  )
}

export default Sidebar