import React, { useState, useEffect } from 'react';
import Navbar from "../components/layout/Navbar";
import SkillsTable from "../components/layout/SkillsTable";
import CategoriesTable from "../components/layout/CategoriesTable";
import DefCard from "../components/cards/DefCard";
import API from "../utils/API"


const Definitions = props => {
  const [getSkills, setGetSkills] = useState(true)
  const [skills, setSkills] = useState([]);

  const [getDefs, setGetDefs] = useState([true]);
  const [defs, setDefs] = useState([]);

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
              name: skill.skillsName,
              master:skill.Master
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

  useEffect(() => {
    
      if (getDefs)
        API.getAllDefByUser()
          .then(res => {
            setDefs(res.data.map(def => ({
              id: def._id,
              defName: def.defName,
              defText: def.defText,
              defCat: def.Cat[0].catName,
            })
            ))
          }
          )
          .catch(
            error => console.log(error)
          )

      setGetDefs(false)
    
  },
    [getDefs]
  );


  return (
    <div>
      <Navbar />
      <div className="row mainRow1">
        <div className="col s2">
          <CategoriesTable categories={categories} />
          <br />
          <SkillsTable skills={skills}
          setGetSkills={setGetSkills} />
        </div>
        <div className="col s10">
          <h4 className="page-title">My Definitions</h4>

          {defs.map(def => (
            <DefCard
              key={def.id}
              id={def.id}
              defName={def.defName}
              defText={def.defText}
              defCat={def.defCat}
              setGetDefs = {setGetDefs}
            />
          )
          )
          }
        </div>
      </div>
    </div>
  );
};

export default Definitions