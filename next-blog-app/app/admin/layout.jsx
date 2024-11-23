'use client'

import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponent/Sidebar";
import Image from "next/image";
import { useEffect } from "react";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 export default function Layout({children}){

    const fetchData =async()=>{
        try {
            const responseuser = await axios.get("http://localhost:8080/api/user-details",
                {
                  withCredentials: true,   
                }
              )
              console.log(responseuser);
        } catch (error) {
            
        }
    }

    useEffect(() => {
  

        fetchData()
      }, []); 

return (
    <>
    <div className="flex">
        <ToastContainer theme="dark"/>
<Sidebar/>
<div className="flex flex-col w-full">
    <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
        <h3 className="font-medium">Admin Panel</h3>
       <Image src={assets.profile_icon} width={40} alt=""/>  
    </div>
    {children}
</div>
    </div>
    </>
)
 }