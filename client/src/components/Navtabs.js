import React from 'react';
import SkillInput from "./SkillInput";
import DefinitionInput from "./DefinitionInput";
import LibraryInput from "./LibraryInput";

const Main = props => {
    return (
        <div>
        <div className="container">
            <nav>
            <div class="nav-content">
                <ul class="tabs tabs-transparent">
                    <li class="tab"><a href="#input">Add Knowledge</a></li>
                    <li class="tab"><a href="#definitions">Definitions</a></li>
                    <li class="tab"><a href="#articles">Articles</a></li>
                    <li class="tab"><a href="#tutorials">Tutorials</a></li>

                </ul>
            </div>
            </nav>
            </div>
{/* 
            <div id="knowledgeDisplay"><SkillInput /></div>
            <div id="definitionsDisplay" class="col s12">Test 2</div>
            <div id="articlesDisplay" class="col s12">Test 3</div>
            <div id="tutorialsDisplay" class="col s12">Test 4</div> */}
        </div>
    );
};

export default Main