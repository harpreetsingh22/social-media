import React from 'react'
import "./rightbar.css"
import Online from "../online/Online" 
import {Users} from "../../dummyData"

function Rightbar({profile}) {

     const HomeRightbar=()=>{
       return(

        <>
         <div className='birthdayContainer' >
               <img src="/assests/gift.png" className='birthdayImg' />
               <span   className='birthdayText' ><b>Daviv</b> and <b> 3 other friends</b> have birthday today</span>

           </div>

           <img src="/assests/ad.png" className='rightbarAd' />
           <h4 className='rightbarTitle'>Online friends</h4>
           <ul className='rightbarFriendList'>
             {
                 Users.map(user=>(

                    <Online key={user.id} user={user}/>
                 )



                 )
             }

           </ul>
        
        </>

       )

     }
    const ProfileRightbar=()=>{
        return(
            <>
             <h4 className='rightbarTitle'>hey its profile right bar </h4>
             <div className='rightbarInfo'>
               <div className='rightbarInfoItem'>

                 <span className='rightbarInfoKey'>City: </span>
                 <span className='rightbarInfoValue'> London</span>
               </div>

               <div className='rightbarInfoItem'>

<span className='rightbarInfoKey'>From: </span>
<span className='rightbarInfoValue'> Mohali</span>
</div>

<div className='rightbarInfoItem'>

<span className='rightbarInfoKey'>Relationship: </span>
<span className='rightbarInfoValue'> Single</span>
</div>





             </div>
             <h4 className='rightbarTitle'>User friends </h4>
             <div className='rightbarFollowings'>

             <div className='rightbarFollowing'>
                 <img src='/assests/persons/1.jpeg' className='rightbarFollowingImg' />
                 <span className='rightbarFollowingName'>John</span>
             </div>

             <div className='rightbarFollowing'>
                 <img src='/assests/persons/1.jpeg' className='rightbarFollowingImg' />
                 <span className='rightbarFollowingName'>John</span>
             </div>

             <div className='rightbarFollowing'>
                 <img src='/assests/persons/2.jpeg' className='rightbarFollowingImg' />
                 <span className='rightbarFollowingName'>John</span>
             </div>

             <div className='rightbarFollowing'>
                 <img src='/assests/persons/3.jpeg' className='rightbarFollowingImg' />
                 <span className='rightbarFollowingName'>John</span>
             </div>


             <div className='rightbarFollowing'>
                 <img src='/assests/persons/3.jpeg' className='rightbarFollowingImg' />
                 <span className='rightbarFollowingName'>John</span>
             </div>

             </div>




            </>
     


        )
    }


    return (
        <div className="rightbar">
            <div className='rightbarWrapper'>
             <ProfileRightbar/>
            </div>
        </div>
    )
}

export default Rightbar ;
