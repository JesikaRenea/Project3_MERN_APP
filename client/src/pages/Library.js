import React, { useState, useEffect } from 'react';
import Navbar from "../components/layout/Navbar";
import SkillsTable from "../components/layout/SkillsTable";
import CategoriesTable from "../components/layout/CategoriesTable";

import LibCard from '../components/cards/LibCard'
// import Main from "../components/Main";
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

    useEffect(() => {

        if (getLib)
            API.getAllLibByUser()
                .then(res => {
                    console.log(res.data);
                    setLib(res.data.map(lib => ({
                        id: lib._id,
                        libName: lib.libName,
                        libType: lib.libType,
                        libURL: lib.libURL,
                        cat: lib.Cat,
                        user: lib.libUser
                    })
                    ))
                }
                )
                .catch(
                    error => console.log(error.response.data)
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
                    <SkillsTable skills={skills} />
                </div>
                <div className="col s10">
                    <h4 className="page-title">My Library</h4>

                    {lib.map(lib => (
                        <LibCard
                            id={lib._id}
                            libName={lib.libName}
                            libType={lib.libType}
                            libURL={lib.libURL}
                            libCat={lib.Cat}
                            libUser={lib.libUser}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Library