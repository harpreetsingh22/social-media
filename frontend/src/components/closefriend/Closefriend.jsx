import "./closefriend.css"

import React from 'react'

function Closefriend({user}) {
    return (
        <li className='sidebarFriend'>
        <img className='sidebarFriendImg' src={user.profilePicture} alt='no image'/>
        <span className='sidebarFriendName'> {user.username}</span>
</li>
    )
}

export default Closefriend
