const router=require("express").Router()  ;
const Post=require("../model/Post") ;
const User = require("../model/User");

router.post("/",async(req,res)=>{
  const newpost=new Post(req.body)  ;

  try{
    const savedPost=await newpost.save() ;
    res.status(200).json(savedPost)
  }
  catch(error){
      res.status(500).json(error) ;
  }
}) ;

router.put("/:id",async(req,res)=>{
try{
    const post=await Post.findById(req.params.id) ;
    if(post.userId===req.body.userId){
      await post.updateOne({$set:req.body})  ;
      res.status(200).json("updated post")  ;
    }else{
        res.status(403).json("you can only update your post")
    }

}
   catch(error){
       res.status(500).json(error)
   }

})        ;








router.delete("/:id",async(req,res)=>{
    try{
        const post=await Post.findById(req.params.id) ;
        if(post.userId===req.body.userId){
          await post.deleteOne()  ;
          res.status(200).json("deleted the post")  ;
        }else{
            res.status(403).json("you can only delete your post")
        }
    
    }
       catch(error){
           res.status(500).json(error)
       }
    
    })        ;
    

router.put("/:id/like",async(req,res)=>{
try{
  const post=await Post.findById(req.params.id) ;
  if(!post.likes.includes(req.body.userId)){
      await post.updateOne({$push:{likes:req.body.userId}}) ;
      res.status(200).json("The post has been liked!") ;
  }
  else{
    await post.updateOne({$pull:{likes:req.body.userId}}) ;
    res.status(200).json("The post has been disliked!") ;
  }
}
catch(error){
     res.status(500).json(error) ;
}


})

 router.get("/:id",async(req,res)=>{ 
     try{
         const post=await Post.findById(req.params.id)  ;
         if(post)
          res.status(200).json(post) ;
          else
          res.status(404).json("post not found") 
            
     }
    catch(error){

        res.status(500).json(error) ;
    }




 })



router.get("/timeline/:userId",async(req,res)=>{
   try{
       const currentuser=await User.findById(req.params.userId) ;
        const userPosts=await Post.find({userId:currentuser._id})   ;
        const friendPosts=await Promise.all(
            currentuser.followings.map((friendId)=>{
                return Post.find({userId:friendId})
            })
        )

     return res.status(200).json(userPosts.concat(...friendPosts))
   }
   catch(error){

  res.status(500).json(error) ;


   }





})





module.exports=router ;


