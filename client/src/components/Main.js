import React, { useState, useEffect } from 'react';
import SkillsTable from "./layout/SkillsTable";
import CategoriesTable from "./layout/CategoriesTable";

import UserInputs from "./UserInputs"
import API from "../utils/API"


const Main = props => {
  const [getSkills, setGetSkills] = useState(true)
  const [skills, setSkills] = useState([])

  const [getCategories, setGetCategories] = useState(true)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    
      if (getCategories)
        API.findAllCat()
          .then(res => {
            console.log(res.data);
            setCategories(res.data.map(category => ({
              id: category._id,
              catName: category.catName
            })
            ))
          }
          )
          .catch(
            error => console.log(error.response.data)
          )

      setGetCategories(false)
    
  },
    [getCategories]
  );

  useEffect(() => {
    
      if (getSkills)
        API.getAllSkillsByUser()
          .then(res => {
            console.log(res.data);
            setSkills(res.data.map(skill => ({
              id: skill._id,
              name: skill.skillsName
            })
            ))
          }
          )
          .catch(
            error => console.log(error.response.data)
          )

      setGetSkills(false)
    
  },
    [getSkills]
  );

  return (

    <div className="row mainRow1">
      <div className="col s2">
        <CategoriesTable categories={categories} />
        <br />
        <SkillsTable skills={skills} />
      </div>
      <div className="col s10">
        {/* <Navtabs /> */}
        <UserInputs getSkills={setGetSkills} />
      </div>
    </div>

  );
};

export default Main