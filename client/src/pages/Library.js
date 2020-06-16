import React, { useState, useEffect } from 'react';
import Navbar from "../components/layout/Navbar";
import SkillsTable from "../components/layout/SkillsTable";
import CategoriesTable from "../components/layout/CategoriesTable";

import LibCard from '../components/cards/LibCard'
import API from "../utils/API"


const Library = props => {
    const [getSkills, setGetSkills] = useState(true)
    const [skills, setSkills] = useState([]);

    const [getLib, setGetLib] = useState([true]);
    const [lib, setLib] = useState([]);


    const [getCategories, setGetCategories] = useState(true)
    const [categories, setCategories] = useState([])

    useEffect(() => {

        if (getCategories)
            API.findAllCat()
                .then(res => {
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
                    setSkills(res.data.map(skill => ({
                        id: skill._id,
                        name: skill.skillsName,
                        master:skill.Master
                    })
                    ))
                }
                )
                .catch(
                    error => console.log(error)
                )

        setGetSkills(false)

    },
        [getSkills]
    );

    useEffect(() => {

        if (getLib)
            API.getAllLibByUser()
                .then(res => {
                    setLib(res.data.map(lib => ({
                        id: lib._id,
                        libName: lib.libName,
                        libType: lib.libType,
                        libURL: lib.libURL,
                        libCat: lib.Cat[0].catName,
                        user: lib.libUser
                    })
                    ))
                }
                )
                .catch(
                    error => console.log(error)
                )

        setGetLib(false)

    },
        [getLib]
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
                    <h4 className="page-title">My Library</h4>

                    {lib.map(lib => (
                        <LibCard
                            key={lib.id}
                            id={lib.id}
                            libName={lib.libName}
                            libType={lib.libType}
                            libURL={lib.libURL}
                            libCat={lib.libCat}
                            libUser={lib.libUser}
                            setGetLib={setGetLib}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Library