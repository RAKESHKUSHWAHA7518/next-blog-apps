'use client'
import React, { useEffect } from 'react'

const page = () => {
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
    <div>page</div>
  )
}

export default page