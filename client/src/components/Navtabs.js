import React from 'react';

const Main = () => {
    return (
        <div>
            <div className="container">
                <nav>
                    <div className="nav-content">
                        <ul className="tabs tabs-transparent">
                            <li className="tab"><a href="#input">Add Knowledge</a></li>
                            <li className="tab"><a href="#definitions">Definitions</a></li>
                            <li className="tab"><a href="#articles">Articles</a></li>
                            <li className="tab"><a href="#tutorials">Tutorials</a></li>

                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Main