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
            Cat.find({}).then(function(data) {res.send(data)})
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

        // Delete A Category by name
        router.delete('/delcatname', (req, res)=>{
            const catName = req.body.catName;
            Cat.deleteOne({catName}, (err, result) =>{
                if(err) return res.send(err)
                res.send(result)
            });
        });

        // Delete a Category by id
        router.delete('/cat', (req, res)=>{
            const _id = req.body._id;
            Cat.findByIdAndDelete({_id}, (err, result) =>{
                if(err) return res.send(err)
                res.send(result)
            });
        });

module.exports = router 