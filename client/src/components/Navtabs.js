import React from 'react';
import SkillInput from "./InputComponents/SkillInput";
import DefinitionInput from "./InputComponents/DefinitionInput";
import LibraryInput from "./InputComponents/LibraryInput";

const Main = props => {
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
{/* 
            <div id="knowledgeDisplay"><SkillInput /></div>
            <div id="definitionsDisplay" className="col s12">Test 2</div>
            <div id="articlesDisplay" className="col s12">Test 3</div>
            <div id="tutorialsDisplay" className="col s12">Test 4</div> */}
        </div>
    );
};

export default Main