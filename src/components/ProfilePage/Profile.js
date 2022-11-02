import "./Profile.css"
import React from 'react'
import Header from '../header/Header'
import UserProfile from "../UserProfile/UserProfile";
import Blogs from "../Blogs/Blogs";
function Profile(){
    return (
        <div id="wrapper">
            <Header />
            <UserProfile />
            <Blogs />
        </div>
    )
}
export default Profile;