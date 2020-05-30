import React from 'react';
import { Link } from 'react-router-dom';


const Main = props => {
  return (

    <nav>
      <div className="nav-wrapper">
        
        <a href="#" className="brand-logo right">
          <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
        </a>

        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="/dashboard">Home</a></li>
          <li><a href="/websearch">Search Web</a></li>
          <li><a href="/videosearch">Search Tutorials</a></li>
          <li><a href="/definitions">My Definitions</a></li>
          <li><a href="/library">My Library</a></li>
        </ul>
      </div>
    </nav>

  );
};

export default Main