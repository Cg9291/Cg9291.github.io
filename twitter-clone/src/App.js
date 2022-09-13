import logo from './logo.svg';
import './App.scss';
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {Helmet} from "react-helmet";//this allows to use helmet(which supports the insertion of script tags in the component's html)
import squarepicicon from "./twitter-newui-iconkit/icons to be used/twitter-image.png"
import gificon from "./twitter-newui-iconkit/icons to be used/twitter-gif.png"
import alignicon from "./twitter-newui-iconkit/icons to be used/twitter-align.png"
import locationicon from "./twitter-newui-iconkit/icons to be used/twitter-location.png"
import noiconicon from "./twitter-newui-iconkit/icons to be used/twitter-cross-2.png"





function App() {
  return (
    <div id="App">
      <section id="left-container">
        <Navigation/>
        <Profile/>
      </section>
      <section id="middle-container">
        <Timeline/>
      </section>
      <section id="right-container">
      <SearchBar/>
      <TrendingSection/>
      <FollowsRecSection/>
      </section>
    </div>
  );
}

export default App;

//THIS STARTS THE CHILDREN FUNCTIONS TO THE APP



function Navigation(props){
  const [li1,setLi1]=useState("Home")
  return (
    <nav>
      <ul>
        <img id="twitter-logo" 
      src="https://raw.githubusercontent.com/gist/mbostock/3094619/raw/78116ff0306b3b5c3f40e6cdd5f6f8f648ecffd1/thumbnail.png" 
      alt="twitter logo" />
        <a href="#"><li><b>{li1}</b></li></a>
        <a href="#"><li>Explore</li></a>
        <a href="#"><li>Notifications</li></a>
        <a href="#"><li>Messages</li></a>
        <a href="#"><li>Bookmarks</li></a>
        <a href="#"> <li>Lists</li></a>
        <a href="#"><li>Profile</li></a>
        <a href="#"><li>More</li></a>
        <a href="#"><button type="click" /*onClick={()=>setLi1("Casa")}*/>Tweet</button></a>
      </ul>
    </nav>
  )
}

function Profile(props){
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

function Timeline(props){
  return (
    <div id="timeline-div">
      <div id='mid-header'>Home</div>
      <div id="tweet-area">
        <img src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"/>
        <input id="tweet-input" placeholder="What's happening?"></input>
      </div>
      <div id="icons-row">
        <ul>
          <li><a href="#"><img src={squarepicicon}/></a></li>
          <li><a href="#"><img src={gificon}/></a></li>
          <li><a href="#"><img src={alignicon}/></a></li>
          <li><a href="#"><img src={noiconicon}/></a></li>
          <li><a href="#"><img src={noiconicon}/></a></li>
          <li><a href="#"><img src={locationicon}/></a></li>
        </ul>
        <button>Tweet</button>
      </div>
      <a id="timeline"class="twitter-timeline" href="https://twitter.com/TheSportsMediaC/lists/1543020161199812608?ref_src=twsrc%5Etfw" data-chrome="noheader" sourceType="list"
    ownerScreenName= "TwitterDev"
    slug= "national-parks">A Twitter List by TheSportsMediaC</a> 
      <Helmet>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </Helmet>
    </div>
  )
}

function SearchBar(props){
  return (
    <input placeholder='Search Twitter'></input>
  )
}

function TrendingSection(){
  return (
    <section id="trending-section">
      <div class="cards-header">What's happening</div>
      <div class="cards">NEWS #1</div>
      <div class="cards">NEWS #2</div>
      <div class="cards">NEWS #3</div>
      <div class="cards">NEWS #4</div>
      <div class="cards-footer"><a href='#'>Show more</a></div>
    </section>
  )
}

function FollowsRecSection(){
  return(
    <section id="rec-follows-section">
      <div class="cards-header">Who to follow</div>
      <div class="cards">PROFILE #1</div>
      <div class="cards">PROFILE #2</div>
      <div class="cards">PROFILE #3</div>
      <div class="cards-footer"><a href='#'>Show more</a></div>
    </section>
  )
}


