import React from 'react';

const Main = props => {
  return (

    <nav>
      <div class="nav-wrapper">
        
        <a href="#" class="brand-logo right">
          <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
        </a>

        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a href="/main">Home</a></li>
          <li><a href="/websearch">Search Web</a></li>
          <li><a href="#">Search Tutorials</a></li>
          <li><a href="/definitions">My Definitions</a></li>
          <li><a href="/library">My Library</a></li>
        </ul>
      </div>
    </nav>

  );
};

export default Main