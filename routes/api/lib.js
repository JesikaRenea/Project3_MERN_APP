const express = require('express');
const router = express.Router();
const passport = require('passport')

const Lib = require('../../models/Lib');


        //Add a library document
        router.post('/lib', passport.authenticate("jwt", {session:false}) , (req, res)=>{
            const libName = req.body.libName;
            const libType = req.body.libType;
            const libURL = req.body.libURL
            const User = req.user.id;
            const Cat = req.body.catId;

            const newLib = new Lib({
                libName,
                libType,
                libURL,
                User,
                Cat
            });

            newLib.save()
            .then(user => res.json(user))
            .catch(err => res.send(err));
        });

        //Update a library document url
        router.put('/liburl', (req, res)=>{
            const _id = req.body.libId;
            const libURL = req.body.libURL;
            Lib.updateOne({_id}, {$set:{libURL}}, (err, result)=>{
                if(err) return res.send(err);
                res.send(result);
            });
        });

        //Update a library document type
        router.put('/libtype', (req, res)=>{
            const _id = req.body.libId;
            const libType = req.body.libType;
            Lib.updateOne({_id}, {$set:{libType}}, (err, result)=>{
                if(err) return res.send(err);
                res.send(result);
            });
        });

        // Get all library documents for a logged in user
        router.get('/alllib', passport.authenticate("jwt", {session:false}) , (req, res)=>{
            const User = req.user.id;
            Lib.find({User}, (err, result)=>{
                if(err) return res.send(err);
                res.send(result);
            });
        });

        //Get one library document by id
        router.get('/lib', (req, res)=>{
            const _id = req.body.libId;
            Lib.find({_id}, (err, data)=>{
                if(err) return res.send(err);
                res.send(data)
            })
        });

        //Get all video library documents
        router.get('/allvidlib', passport.authenticate("jwt", {session:false}), (req, res)=>{
            Lib.find({$and:[{User:req.user.id}, {libType:'VIDEO'}]}, (err, data)=>{
                if(err) return res.send(err);
                res.send(data)
            })
        });

        // get all text library documents
        router.get('/alltextlib', passport.authenticate("jwt", {session:false}), (req, res)=>{
            Lib.find({$and:[{User:req.user.id}, {libType:'TEXT'}]}, (err, data)=>{
                if(err) return res.send(err);
                res.send(data)
            })
        });

        // Delete a library document
        router.delete('/lib', (req, res)=>{
            const _id = req.body.libId;
            Lib.deleteOne({_id}, (err,result)=>{
                if(err) return res.send(err);
                res.send(result);
            });
        });

module.exports = router;