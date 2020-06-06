import React from 'react';
import { Link } from 'react-router-dom';


const Main = props => {
  return (

    <nav>
      <div className="nav-wrapper">
        
        <Link to="/dashboard" className="brand-logo right">
          <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
        </Link>

        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><Link to="/dashboard">Home</Link></li>
          <li><Link to="/websearch">Search Web</Link></li>
          <li><Link to="/videosearch">Search Tutorials</Link></li>
          <li><Link to="/definitions">My Definitions</Link></li>
          <li><Link to="/library">My Library</Link></li>
        </ul>
      </div>
    </nav>

  );
};

export default Main