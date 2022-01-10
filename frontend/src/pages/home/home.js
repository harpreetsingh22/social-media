import React from 'react'
import { Person } from '@material-ui/icons'
import Topbar from '../../components/topbar/Topbar'   
import Rightbar from '../../components/rightbar/Rightbar' 
import Sidebar from '../../components/sidebar/Sidebar'  ;
import Feed from '../../components/feed/Feed';
import "./home.css" ;

export default function Home() {
    return (
        <div>
             
            <Topbar/>
            <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
            </div>
            
        </div>
    )
}





