import React, { useState } from "react";
import '../Styling/Navigation.scss'

export default function Navigation(props){
    return (
      <nav>
        <ul>
          <img id="twitter-logo" 
        src="https://raw.githubusercontent.com/gist/mbostock/3094619/raw/78116ff0306b3b5c3f40e6cdd5f6f8f648ecffd1/thumbnail.png" 
        alt="twitter logo"/>
          <a href="#">
            <li className="nav-list-items">
              <svg width="1.6rem" viewBox="0 0 24 24" aria-hidden="true">
                <g><path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path></g>
              </svg>
              <b>Home</b>
            </li>
          </a>
          <a href="#">
            <li className="nav-list-items">
              <svg width="1.6rem" viewBox="0 0 24 24" aria-hidden="true">
                <g><path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path></g>
              </svg>
              Explore
            </li></a>
          <a href="#">
            <li className="nav-list-items">
              <svg width="1.6rem" viewBox="0 0 24 24" aria-hidden="true">
                <g><path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path></g>
              </svg>
              Notifications
            </li></a>
          <a href="#">
            <li className="nav-list-items">
              <svg width="1.6rem" viewBox="0 0 24 24" aria-hidden="true">
                <g><path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path></g>
              </svg>
              Messages
            </li></a>
          <a href="#">
            <li className="nav-list-items">
              <svg width="1.6rem" viewBox="0 0 24 24" aria-hidden="true">
                <g><path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path></g>
              </svg>
            Bookmarks
            </li></a>
          <a href="#">
            <li className="nav-list-items">
              <svg width="1.6rem" viewBox="0 0 24 24" aria-hidden="true">
                <g><path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path></g>
              </svg>
              Lists
            </li></a>
          <a href="#">
            <li className="nav-list-items">
              <svg width="1.6rem" viewBox="0 0 24 24" aria-hidden="true">
                <g><path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path></g>
              </svg>
              Profile
            </li></a>
          <a href="#">
            <li className="nav-list-items">
              <svg width="1.6rem" viewBox="0 0 24 24" aria-hidden="true">
                <g><path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path></g>
              </svg>
              More
            </li></a>
          <a href="#"><button type="click" className="tweet-btn" /*onClick={()=>setLi1("Casa")}*/>Tweet</button></a>
        </ul>
      </nav>
    )
  }