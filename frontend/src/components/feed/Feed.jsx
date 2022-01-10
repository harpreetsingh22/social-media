import React from 'react'
import "./feed.css"
import Share from "../share/Share"
import Post from '../post/Post'
import {Posts} from "../../dummyData"
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'

  

function Feed() {


  


    const [posts, setPosts] = useState([]);
   
  
   useEffect(()=>{
       const fetchPosts=async()=>{
           
           const res=await axios.get("http://localhost:8000/api/posts/timeline/61d57152ee6eeb2904dc5b3b") ;
           setPosts(res.data) ;
           console.log(res) ;
           setPosts(res.data) ;

           console.log(posts) ;
       }

       fetchPosts() ;
   },[])
 
   
    return (
        
        <div className="feed">
            <div className='feedwrapper'>
               <Share/>
              {
                  Posts.map(p=>(

         
                   <Post key={p.id} post={p} />
                  )



                  )
              }
               
            </div>
        </div>
    )
}

export default Feed
