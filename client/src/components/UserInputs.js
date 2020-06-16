import React from 'react';
import CategoryInput from "../components/InputComponents/CategoryInput"
import SkillInput from "../components/InputComponents/SkillInput";
import DefinitionInput from "../components/InputComponents/DefinitionInput";
import LibraryInput from "../components/InputComponents/LibraryInput";
//import API from "../utils/API";

const UserInputs = props => {
//     const [getCats, setGetCats] = useState(true)
//     const [categories, setCategories] = useState([])

//     useEffect(() => {
//         if(getCats)
//         {API.findAllCat()
//                     .then(res => {
//                 console.log(res.data);
//                 setCategories(res.data.map(cat => ({
//                     value: cat._id,
//                     label: cat.catName
//                 })
//                 ))
//             }
//             )
//             .catch(
//                 error => console.log(error.response.data)
//             )

//         setGetCats(false)} 
//     },
//         [getCats]
//     );

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