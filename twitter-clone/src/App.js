import logo from './logo.svg';
import './App.scss';
import React, { useState } from "react";
import Navigation from './Components/Navigation';
import Profile from './Components/Profile';
import Timeline from './Components/Timeline';
import SearchBar from './Components/SearchBar';
import TrendingSection from './Components/TrendingSection';
import FollowsRecSection from './Components/FollowsRecSection';


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


