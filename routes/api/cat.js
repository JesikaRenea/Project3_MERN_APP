const express = require('express');
const router = express.Router();
const passport = require('passport')

const Cat = require('../../models/Cat');

        // Add Category, categories are unique
        router.post('/cat', (req, res) => {
            const catName = req.body.catName;
            Cat.findOne({ catName }).then(cat => {
                if(cat) return res.status(400).json({ catName: "Category already exists" });
                const newCat = new Cat({
                    catName
                });
                newCat.save()
                .then(cat => res.json(cat))
                .catch(err => console.log(err));
            
            });
        });

        // Find All Categories
        router.get('/allcat', (req, res) => {
            catName = req.body.catName;
            Cat.find({}, null, {sort:{catName}})
            .then(function(data) {res.send(data)})
            .catch(err => console.log(err))
        });

        //Find Category by name (can get id from this)
        router.get('/catbyname', (req, res)=>{
            const catName = req.body.catName;
            Cat.findOne({catName}, (err, result)=>{
                if(err) return res.send(err);
                res.send(result)
            })
        })

        //Find Category by ID (can get name from this)
        router.get('/catbyid', (req, res)=>{
            const _id = req.body.catId;
            Cat.findById({_id}, (err, result)=>{
                if(err) return res.send(err);
                res.send(result)
            })
        })


        // Delete A Category by name
        router.delete('/delcatname', (req, res)=>{
            const catName = req.body.catName;
            Cat.deleteOne({catName}, (err, result) =>{
                if(err) return res.send(err)
                res.send(result)
            });
        });

        // Delete a Category by id
        router.delete('/cat/:id', (req, res)=>{
            const _id = req.params.id;
            Cat.findByIdAndDelete({_id}, (err, result) =>{
                if(err) return res.send(err)
                res.send(result)
            });
        });

module.exports = router 