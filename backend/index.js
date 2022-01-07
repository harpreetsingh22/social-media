const express=require('express') ;
const mongoose=require('mongoose')  ;
const dotenv=require('dotenv') ;
const helmet=require('helmet') ;
const morgan=require('morgan') ;
const app=express()  ;
const userRoute=require('./routes/users') ;
const authRoute=require('./routes/auth') ;
const postRoute=require('./routes/posts')  ;

dotenv.config()  ;

const Connection = async()=>{
    const URL="mongodb+srv://harry:harry1234@cluster0.jddpt.mongodb.net/social-media?retryWrites=true&w=majority"
      try{ 
          await mongoose.connect(URL, {useNewUrlParser: true,
              useUnifiedTopology: true});
      console.log("database connected successfully") ;
  
      }
      catch(error){
        console.log("error while connecting to mongodb :" ,error)
      }
  
  }
 Connection() ;
 app.use(express.json()) ;
 app.use(helmet()) ;
 app.use(morgan("common")) ;


 app.get("/",(req,res)=>{
     res.send("welcome to home age!!") ;
 })


 app.use("/api/user",userRoute) ;

 app.use("/api/auth",authRoute) ;


 
 app.use("/api/posts",postRoute) ;



app.listen(8000,()=>{
    console.log("Backend server is running")
})