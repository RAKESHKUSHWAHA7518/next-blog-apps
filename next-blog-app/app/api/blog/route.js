import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/model/BlogModel";
import { Buffer } from "buffer";
import {writeFile} from 'fs/promises';
const fs = require('fs')

const { NextResponse } = require("next/server");

const LoadDB= async()=>{
    await connectDB()
}
LoadDB()

 export async function GET(request){
    const blogId = request.nextUrl.searchParams.get("id");
    if(blogId) {
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);
    } 
    else {
        const blogs = await BlogModel.find({});
        return NextResponse.json({blogs})
        //msg:"API working"
    }
    // console.log("Rakesh");
 }


 export async function POST(request){
    const formData = await request.formData();
    const timestamp= Date.now();
    // return NextResponse.json()

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path =`./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl = `/${timestamp}_${image.name}`;
    // console.log(imgUrl);
    // return NextResponse.json({imgUrl})

    

    const blogData = {
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
        author:`${formData.get('author')}`,
        image:`${imgUrl}`,
        authorImg:`${formData.get('authorImg')}`


    }

    console.log(blogData);
    

     await  BlogModel.create(blogData)
     console.log("Blog save");
      return NextResponse.json({success:true,
        data:blogData,

      })
 }

 //Creating API Endpoint to delete Blog

 export async function DELETE(request){
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);
    fs.unlink(`./public${blog.image}`,()=>{});
    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({msg:"Blog Deleted"})
 }
