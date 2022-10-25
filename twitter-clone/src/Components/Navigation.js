import React, { useState } from "react";
import '../Styling/Navigation.scss'

export default function Navigation(props){
    return (
      <nav>
        <ul>
          <img id="twitter-logo" 
        src="https://raw.githubusercontent.com/gist/mbostock/3094619/raw/78116ff0306b3b5c3f40e6cdd5f6f8f648ecffd1/thumbnail.png" 
        alt="twitter logo" />
          <a href="#"><li className="nav-list-items"><b>Home</b></li></a>
          <a href="#"><li className="nav-list-items">Explore</li></a>
          <a href="#"><li className="nav-list-items">Notifications</li></a>
          <a href="#"><li className="nav-list-items">Messages</li></a>
          <a href="#"><li className="nav-list-items">Bookmarks</li></a>
          <a href="#"><li className="nav-list-items">Lists</li></a>
          <a href="#"><li className="nav-list-items">Profile</li></a>
          <a href="#"><li className="nav-list-items">More</li></a>
          <a href="#"><button type="click" className="tweet-btn" /*onClick={()=>setLi1("Casa")}*/>Tweet</button></a>
        </ul>
      </nav>
    )
  }