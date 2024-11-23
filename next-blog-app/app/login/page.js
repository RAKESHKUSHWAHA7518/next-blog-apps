'use client'

// import React, {  useState } from 'react'
// import Link from 'next/link'
// import axios from 'axios'
// import toast from 'react-hot-toast';
// import { useRouter } from 'next/navigation'

// const Login = () => {
//   const [data,setData] = useState({
//     email : "",
//     password : "",
//   })
//   const [loading,setLoading] = useState(false)
//   const router = useRouter()

//   const handleOnChange =  (e) =>{
//     const {name , value } = e.target

//     setData((preve)=>{
//       return{
//           ...preve,
//            [name] : value
//       }
//     })
//   }

//   const handleSubmit = async(e) =>{
//     e.preventDefault()

//     const response = await axios.post('http://localhost:8080/api/signin',data)
//     console.log(response);
    
//     toast(response.data.message)


//     if(response.data.success){
//       setData({
//         email : "",
//         password : "",
//       })
//       router.push("/admin")
//     }
    
//   }


//   return (
//     <section className='container w-full mx-auto p-1 mt-5'>
//     <div className='w-full max-w-md bg-white shadow border p-4 mx-auto'>
//         <p>Welcome to facepedia!</p>

//         <form className='mt-4 grid gap-4' onSubmit={handleSubmit}>
          
//           <div className='flex flex-col gap-1'>
//                 <label htmlFor='email'>Email:</label>
//                 <input
//                   type='email'
//                   name="email"
//                   id='email'
//                   value={data.email}
//                   placeholder='enter email'
//                   onChange={handleOnChange}
//                   disabled={loading}
//                   className='bg-slate-100 w-full py-2 px-2 focus:outline-blue-700 rounded'
//                 />
//           </div>


//           <div className='flex flex-col gap-1'>
//                 <label htmlFor='password'>Password:</label>
//                 <input
//                   type='password'
//                   name="password"
//                   id='password'
//                   value={data.password}
//                   placeholder='enter password'
//                   onChange={handleOnChange}
//                   disabled={loading}
//                   className='bg-slate-100 w-full py-2 px-2 focus:outline-blue-700 rounded'
//                 />
//           </div>

//           <button className='bg-blue-700 hover:bg-blue-800 py-2 px-4 font-semibold text-white rounded'>Login</button>
//         </form>

//         <div className='my-5'>
//           <p>Create new account ? <Link href={'/register'} className='text-blue-700 hover:text-blue-800 hover:underline'>Register</Link></p>
//         </div>
//     </div>
// </section>
//   )
// }

// export default Login

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const router = useRouter();
  const [user,setUser]=useState('')

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const login = async (e) => {
      e.preventDefault()
    if (!data.email || !data.password) return;

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/api/login', data,{
        withCredentials: true
      });
      console.log(response);
      // Cookies.set('token', response.data.data, { expires: 7, path: '' });

      setResponseMessage(response.data.message);
      toast(response.data.message);

      if (response.data.success) {
        setData({
          email: "",
          password: "",
        });
        const responseuser = await axios.get("http://localhost:8080/api/user-details",
          {
            withCredentials: true,   
          }
        )
        console.log(responseuser);
        setUser(responseuser.data.data._id)
        console.log(user);
        
        
        console.log(responseuser.data.data._id);
        setUser(responseuser.data.data._id)
        console.log(user);
        localStorage.setItem('userID',responseuser.data.data._id );
        router.push("/admin");
      }
    } catch (error) {
      toast("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  

    login();
  }, [data]); // runs when data changes

  return (
    <section className='container w-full mx-auto p-1 mt-5'>
      <div className='w-full max-w-md bg-white shadow border p-4 mx-auto'>
         

        <form className='mt-4 grid gap-4' onSubmit={login}>
          <div className='flex flex-col gap-1'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              name="email"
              id='email'
              value={data.email}
              placeholder='enter email'
              onChange={handleOnChange}
              disabled={loading}
              className='bg-slate-100 w-full py-2 px-2 focus:outline-blue-700 rounded'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              name="password"
              id='password'
              value={data.password}
              placeholder='enter password'
              onChange={handleOnChange}
              disabled={loading}
              className='bg-slate-100 w-full py-2 px-2 focus:outline-blue-700 rounded'
            />
          </div>

          <button className='bg-blue-700 hover:bg-blue-800 py-2 px-4 font-semibold text-white rounded'>
            Login
          </button>
        </form>

        <div className='my-5'>
          <p>Create new account? <Link href={'/register'} className='text-blue-700 hover:text-blue-800 hover:underline'>Register</Link></p>
        </div>
      </div>
    </section>
  );
};

export default Login;

