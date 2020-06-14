const express = require('express');
const router = express.Router();
const passport = require('passport')

const Def = require('../../models/Def');

        //New Definition
        router.post('/def', passport.authenticate("jwt", {session:false}), (req, res)=>{
            const defName = req.body.defName;
            const defText = req.body.defText;
            const User = req.user.id;
            const Cat = req.body.catId;

            const newDef = new Def({
                defName,
                defText,
                Cat,
                User
            });

            newDef.save()
            .then(user => res.json(user))
            .catch(err => res.send(err));
        });

        //Update Def Text
        router.put('/def', (req, res)=>{
            const _id = req.body.defId;
            const defText = req.body.defText;
            Def.updateOne({_id}, {$set:{defText}}, (err, result)=>{
                if(err) return res.send(err);
                res.send(result);
            });
        })

        // Get one definition
        router.get('/def', (req, res)=>{
            const _id = req.body.defId;
            Def.find({_id})
            .populate("Cat")
            .then(result=>res.send(result))
            .catch(err => res.send(err))
        });

        // Delete one definition
        router.delete('/def/:id', (req, res)=>{
            const _id = req.params.id;
            console.log(_id)
            Def.deleteOne({_id}, (err,result)=>{
                if(err) return res.send(err);
                res.send(result);
            });
        });

        //Get all user's definitions
        router.get('/alldef', passport.authenticate("jwt", {session:false}), (req, res)=>{
            const User = req.user.id;
            Def.find({User})
                .populate("Cat")
                .then(result=>res.send(result))
                .catch(err => res.send(err))
        });

        //Get all user's definitions by category id
        router.get('/alldefcat', passport.authenticate("jwt", {session:false}) ,(req, res)=>{
            const User = req.user.id;
            const Cat = req.body.catId;
            Def.find({$and:[{User}, {Cat}]}, (err, data)=>{
                if(err) return res.send(err);
                res.send(data)
            })        
        });

module.exports = router;