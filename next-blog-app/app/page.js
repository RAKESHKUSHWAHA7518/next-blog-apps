'use client'
 
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import axios from "axios";
import { useState } from "react";

 

export default async function Home() {

  const [userData,setUserData]= useState('')
  try {
    // const response = await axios.get('http://localhost:8080/api/user-details');
  // const  userDetails = response.data;
  // console.log(response);
  // setUserData(response.data)
    // Assuming the API returns the user details in the response
  } catch (error) {
    // console.error('Error fetching user details:',  error);
    // userDetails = { error: 'Failed to fetch user details' };
  }
  return (
    <>
     <Header />
      <BlogList />
      <Footer />
    </>
  );
}

// import Header from './Header';
// import BlogList from './BlogList';
// import Footer from './Footer';
// import axios from 'axios';

// export default function Home({ userDetails }) {
//   return (
//     <>
//       <Header />
//       {/* You can now pass the userDetails to BlogList or any other component */}
//       <div>
//         <h2>User Details</h2>
//         <pre>{JSON.stringify(userDetails, null, 2)}</pre>
//       </div>
//       <BlogList />
//       <Footer />
//     </>
//   );
// }

// // This function will be executed on the server side during SSR
// export async function getServerSideProps() {
//   try {
//     // Fetch the user details from the API
//     const response = await axios.get('http://localhost:8080/api/user-details');
//     const userDetails = response.data;

//     // Return the fetched data as props
//     return {
//       props: {
//         userDetails,
//       },
//     };
//   } catch (error) {
//     // Handle error if the API request fails
//     console.error('Error fetching user details:', error);

//     // Return default or empty data in case of error
//     return {
//       props: {
//         userDetails: null,
//       },
//     };
//   }
// }

