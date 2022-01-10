   import "./profile.css"
   import Topbar from '../../components/topbar/Topbar'   
import Rightbar from '../../components/rightbar/Rightbar' 
import Sidebar from '../../components/sidebar/Sidebar'  ;
import Feed from '../../components/feed/Feed';
   
   function Profile() {
       return (
        <div>
             
        <Topbar/>
        <div className="profile">
        <Sidebar/>

        <div className="profileRight">

            <div className="profileRightTop">
                <div className="profileCover">
                <img  className="profileCoverImg" src="/assests/posts/3.jpeg"/>
                <img  className="profileUserImg" src="/assests/persons/7.jpeg"/>
                </div>
                <div className="profileInfo">
               <h4 className="profileInfoName">kdkdmfn </h4>
               <span className="profileInfoDesc">kdkdmfn ffj  kf fkf f</span>
              </div>


            </div>
             
            <div className="profileRightBottom">

            <Feed/>

<Rightbar profile/>
                
                </div>
      
        </div>

       
        </div>
        
    </div>
       )
   }
   
   export default Profile
   