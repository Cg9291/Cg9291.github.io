import squarepicicon from "../twitter-newui-iconkit/icons to be used/twitter-image.png"
import gificon from "../twitter-newui-iconkit/icons to be used/twitter-gif.png"
import alignicon from "../twitter-newui-iconkit/icons to be used/twitter-align.png"
import locationicon from "../twitter-newui-iconkit/icons to be used/twitter-location.png"
import noiconicon from "../twitter-newui-iconkit/icons to be used/twitter-cross-2.png"
import {Helmet} from "react-helmet";//this allows to use helmet(which supports the insertion of script tags in the component's html)


export default function Timeline(props){
    return (
      <div id="timeline-div">
        <div id='mid-header'>Home</div>
        <div id="tweet-area">
          <img src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"/>
          <input id="tweet-input" placeholder="What's happening?"></input>
        </div>
        <div id="icons-row">
          <ul>
            <li>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <g><path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z">
              </path></g>
              </svg>
            </li>
            <li><a href="#"><img src={squarepicicon} className="timeline-icons"/></a></li>
            <li><a href="#"><img src={gificon} className="timeline-icons"/></a></li>
            <li><a href="#"><img src={alignicon} className="timeline-icons"/></a></li>
            <li><a href="#"><img src={noiconicon} className="timeline-icons"/></a></li>
            <li><a href="#"><img src={noiconicon} className="timeline-icons"/></a></li>
            <li><a href="#"><img src={locationicon} className="timeline-icons"/></a></li>
          </ul>
          <button>Tweet</button>
        </div>
        <a id="timeline" class="twitter-timeline" href="https://twitter.com/TheSportsMediaC/lists/1543020161199812608?ref_src=twsrc%5Etfw" data-chrome="noheader" sourceType="list"
      ownerScreenName= "TwitterDev"
      slug= "national-parks">A Twitter List by TheSportsMediaC</a> 
        <Helmet>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </Helmet>
      </div>
    )
  }