// 'use client'
  

'use client'

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [data, setData] = useState({
    name: "",
    
    email: "",
    password: "",
    
  });
  const [loading, setLoading] = useState(false);
  const inputFileRef = useRef();
  const router = useRouter();

  // Handle form data changes
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle profile picture upload
  const handleUploadProfilePic = (e) => {
    const file = e.target.files[0];
    setData((prev) => ({
      ...prev,
      profile_pic: file
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();
    formData.append("firstName", data.name);
     
    
    formData.append("email", data.email);
    formData.append("password", data.password);
     

    // Log FormData to check if it's correctly populated
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    try {
      // Send the data to the backend via POST request
      console.log(data);
      
      const response = await axios.post('http://localhost:8080/api/signup', data);
      console.log(response);

      toast(response.data.message);

      if (response.data.success) {
        // Reset form state after successful submission
        setData({
          firstName: "",
          
          email: "",
          password: "",
          
        });

        // Redirect to login page after successful signup
        router.push("/login");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      toast('An error occurred, please try again.');
    }
  };

  return (
    <section className="container w-full mx-auto p-1 mt-5">
      <div className="w-full max-w-md bg-white shadow border p-4 mx-auto">
       

        <form className="mt-4 grid gap-4" onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={data.name}
                placeholder="Enter first name"
                onChange={handleOnChange}
                disabled={loading}
                className="bg-slate-100 w-full py-2 px-2 focus:outline-blue-700 rounded"
              />
            </div>
            
          </div>

           

          

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              placeholder="Enter email"
              onChange={handleOnChange}
              disabled={loading}
              className="bg-slate-100 w-full py-2 px-2 focus:outline-blue-700 rounded"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={data.password}
              placeholder="Enter password"
              onChange={handleOnChange}
              disabled={loading}
              className="bg-slate-100 w-full py-2 px-2 focus:outline-blue-700 rounded"
            />
          </div>

          {/* <div className="flex flex-col gap-1">
            <label htmlFor="profile_pic">Profile Photo:</label>
            <div
              className="h-14 bg-slate-100 flex justify-center items-center cursor-pointer border hover:border-blue-700"
              onClick={() => inputFileRef.current.click()}
            >
              <input
                type="file"
                id="profile_pic"
                className="hidden"
                ref={inputFileRef}
                onChange={handleUploadProfilePic}
              />
              {data.profile_pic ? (
                <p>{data.profile_pic.name}</p>
              ) : (
                <div className="flex gap-3">
                  <Image
                    src="/assets/icons/upload.svg"
                    width={25}
                    height={25}
                    alt="upload"
                  />
                  <p className="text-sm">Upload profile image</p>
                </div>
              )}
            </div>
          </div> */}

          <button className="bg-blue-700 hover:bg-blue-800 py-2 px-4 font-semibold text-white rounded" disabled={loading}>
            {loading ? "Submitting..." : "Register"}
          </button>
        </form>

        <div className="my-5">
          <p>
            Already have an account?{" "}
            <Link href="/login" className="text-blue-700 hover:text-blue-800 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;

