import React from 'react';
import CategoryInput from "../components/InputComponents/CategoryInput"
import SkillInput from "../components/InputComponents/SkillInput";
import DefinitionInput from "../components/InputComponents/DefinitionInput";
import LibraryInput from "../components/InputComponents/LibraryInput";

const UserInputs = props => {
    return (
        <div>
            <CategoryInput getCats={props.setGetCategories}/>
            <SkillInput categories={props.categories} getSkills={props.setGetSkills} />
            <DefinitionInput categories={props.categories}/>
            <LibraryInput categories={props.categories}/>
        </div>

    );
};

export default UserInputs