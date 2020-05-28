import React from 'react';
import { Link } from 'react-router-dom';
import Definitions from "../pages/Definitions";


const Main = props => {
  return (

    <nav>
      <div class="nav-wrapper">
        
        <a href="#" class="brand-logo right">
          <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
        </a>

        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a href="/dashboard">Home</a></li>
          <li><a href="/websearch">Search Web</a></li>
          <li><a href="/videosearch">Search Tutorials</a></li>
          <li><Link to="/definitions" component={Definitions}>My Definitions</Link></li>
          <li><a href="/library">My Library</a></li>
        </ul>
      </div>
    </nav>

  );
};

export default Main