import React from 'react';
import CategoryInput from "../components/InputComponents/CategoryInput"
import SkillInput from "../components/InputComponents/SkillInput";
import DefinitionInput from "../components/InputComponents/DefinitionInput";
import LibraryInput from "../components/InputComponents/LibraryInput";

const UserInputs = props => {
    return (
        <div>
            <CategoryInput />
            <SkillInput />
            <DefinitionInput />
            <LibraryInput />
        </div>

    );
};

export default UserInputs