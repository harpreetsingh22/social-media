const mongoose=require("mongoose") ;

const UserSchema=mongoose.Schema({

  username:{
      type:String ,
      require:true ,
      unique:false ,
      min:3 ,
      max:20 ,
     
  } ,
  email:{
    type:String ,
    require:true ,
    unique:false ,
    min:6 ,
   

  } ,
   password:{
       type:String ,
        require:true ,
       min:6

   } ,
   profilePicture:{
       type:String ,
        default:""
   } ,
   coverPicture:{
    type:String ,
     default:""
} ,
followers:{
    type:"array" ,
    default:[]
} ,
followings:{
    type:"array" ,
    default:[]

} ,


isAdmin:{

    type:Boolean ,
    default:false 
}  ,

desc:{
    type:String
}



   



}) ;


module.exports=mongoose.model("User",UserSchema) ;