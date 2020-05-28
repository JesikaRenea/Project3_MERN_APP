import React from 'react';
import CategoryInput from "./CategoryInput";
import SkillInput from "./SkillInput";
import DefinitionInput from "./DefinitionInput";
import LibraryInput from "./LibraryInput";

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