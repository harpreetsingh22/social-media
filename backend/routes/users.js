const router=require("express").Router()  ;
const bcrypt=require("bcrypt") ;
const User=require("../model/User")

router.put("/:id",async(req,res)=>{

   if(req.body.userId===req.params.id || req.body.isAdmin ){
      if(req.body.password){
         try{
                 const salt=await bcrypt.genSalt(10)  ;
                 req.body.password=await bcrypt.hash(req.body.password,salt) ;
               
         }
        catch(error){
           return res.status(500).json(error) ;
        }
}

      try{
               const user=await User.findByIdAndUpdate(req.params.id,{
                  $set:req.body ,
               }) ;

               res.status(200).json("account has been updated!!")   ;
      }
   catch(error){
           return res.status(403).json(error) ;

   }


   }
   else{
      return res.status(403).json("you can only update your account!!") ;
   }

})













router.delete("/:id",async(req,res)=>{

   if(req.body.userId===req.params.id ){
  

      try{
               const user=await User.findByIdAndDelete(req.params.id) ;

               res.status(200).json("account has been deleted!!")   ;
      }
   catch(error){
           return res.status(403).json("not deleted!") ;

   }


   }
   else{
      return res.status(403).json("you can only update your account!!") ;
   }

})

router.get("/:id",async(req,res)=>{

   try{

      const user=await User.find({_id:req.body.userId})  ;

      res.status(200).json(user) ;

   }
catch(error)
{

  return res.status(404).json(error) ;

}




})


router.put("/:id/follow",async(req,res)=>{
   if(req.body.userId!==req.params.id){
    try{
       const user=await User.findById(req.params.id)   ;
       const currentuser=await User.findById(req.body.userId)   ;
       if(!user.followers.includes(req.body.userId)){
         await user.updateOne({$push :{followers:req.body.userId}}) ;
          await currentuser.updateOne({$push :{followings:req.params.id}}) ;
          res.status(200).json("following added!") ;

       }
      else{
              res.status(403).json("you have already followed this user!!")
      }

    }
    catch(error){

      res.status(500).json(error) ;
    }


   }

   else{
      res.status(403).json("you cant follow yourself!!")
  }

})















router.put("/:id/unfollow",async(req,res)=>{
   if(req.body.userId!==req.params.id){
    try{
       const user=await User.findById(req.params.id)   ;
       const currentuser=await User.findById(req.body.userId)   ;
       if(user.followers.includes(req.body.userId)){
         await user.updateOne({$pull :{followers:req.body.userId}}) ;
          await currentuser.updateOne({$pull :{followings:req.params.id}}) ;
          res.status(200).json("unfollowing ") ;

       }
      else{
              res.status(403).json("you have already unfollowed this user!!")
      }

    }
    catch(error){

      res.status(500).json(error) ;
    }


   }

   else{
      res.status(403).json("you cant follow yourself!!")
  }

})









module.exports=router ;