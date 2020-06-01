import React, { useEffect , useState } from 'react';
import CategoryInput from "../components/InputComponents/CategoryInput"
import SkillInput from "../components/InputComponents/SkillInput";
import DefinitionInput from "../components/InputComponents/DefinitionInput";
import LibraryInput from "../components/InputComponents/LibraryInput";
import API from "../utils/API";

const UserInputs = props => {
    const [getCats, setGetCats] = useState(true)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        if(getCats)
        {API.findAllCat()
                    .then(res => {
                console.log(res.data);
                setCategories(res.data.map(cat => ({
                    value: cat._id,
                    label: cat.catName
                })
                ))
            }
            )
            .catch(
                error => console.log(error.response.data)
            )

        setGetCats(false)} 
    },
        [getCats]
    );

    return (
        <div>
            <CategoryInput getCats={setGetCats}/>
            <SkillInput categories={categories}/>
            <DefinitionInput categories={categories}/>
            <LibraryInput categories={categories}/>
        </div>

    );
};

export default UserInputs