import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({key,title,description, category,image,id}) => {
  return (
    <div key={key} className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-w-[-7px_7px_0px_#000000]'>
        <Link href={`/blogs/${id}`}>
        <img src= {image}  alt="Description of the image"  className="w-full h-auto rounded-lg mb-4" 
/>
         {/* <Image src={image} alt='' width={400} height={400} className='border-b border-black'/> */}
         </Link>
         <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
         <div className='p-5'>
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
            {/* <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p> */}
            <p className='mb-3 text-sm tracking-tight text-gray-700'>
  {description.slice(0, 50)}{description.length > 50 && '...'}
</p>
            <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
                Read more <Image src={assets.arrow} className='ml-2' alt='' width={12}/>
            </Link>
            {/* <Link href={`/login`} className='inline-flex items-center py-2 font-semibold text-center'>
                Read more <Image src={assets.arrow} className='ml-2' alt='' width={12}/>
            </Link> */}
         </div>
        </div>
  )
}

export default BlogItem