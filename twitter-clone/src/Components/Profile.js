import { useState } from "react";

export default function Profile(props){
    const [userName,setUserName]=useState({
      userName:"CGcodes",
      userHandle:"@Cg_devs"
    })
    return(
      <div id="profile-pill-container">
        <div id="profile-pill">
          <img src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"/>
          <div id="username">
            {userName.userName}<br/>
            {userName.userHandle}
          </div>
          <div><strong>...</strong></div>
        </div>
      </div>
    )
  }