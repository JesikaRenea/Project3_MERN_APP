const express = require('express');
const router = express.Router();
const passport = require('passport');

const Skills = require('../../models/Skills');

        //Add a Skill
        router.post('/skill', passport.authenticate("jwt", {session:false}) ,(req, res)=>{
            const skillsName = req.body.skillsName;
            const User = req.user.id;
            const Cat = req.body.catId;

            console.log(User, skillsName, Cat);

            const newSkill = new Skills({
                skillsName,
                Cat,
                User
            });

            newSkill.save()
            .then(user => res.json(user))
            .catch(err => res.send(err));
        });

        //Get all skills by user
        router.get('/skill', passport.authenticate("jwt", {session:false}), (req, res)=>{
            const User = req.user.id;
            Skills.find({User}).then(function(data) {res.send(data)})
            .catch(err => res.send(err))
        });

        //Delete a skill by id
        router.delete('/skill', (req, res)=>{
            const _id = req.body.skillId;
            Skills.deleteOne({_id}, (err, result) =>{
                if(err) return res.send(err)
                res.send(result)
            });
        });

        //Master a skill by id
        router.put('/skill', (req, res)=>{
            const _id = req.body.skillId;
            Skills.updateOne({_id}, {$set:{Master:true}}, (err, result)=>{
                if(err) return res.send(err);
                res.send(result);
            });
        });

        //Unmaster a skill
        router.put('/unskill', (req, res)=>{
            const _id = req.body.skillId;
            Skills.updateOne({_id}, {$set:{Master:false}}, (err, result)=>{
                if(err) return res.send(err);
                res.send(result);
            });
        });

        //Get all mastered skills
        router.get('/allmasteredskill', passport.authenticate("jwt", {session:false}),  (req, res)=>{
            const User = req.user.id;
            Skills.find({$and:[{User}, {Master:true}]}, (err, data)=>{
                if(err) return res.send(err);
                res.send(data)
            })
        });

        //Get all unmastered skills
        router.get('/allunmasteredskill', passport.authenticate("jwt", {session:false}) ,(req, res)=>{
            const User = req.user.id;
            Skills.find({$and:[{User}, {Master:false}]}, (err, data)=>{
                if(err) return res.send(err);
                res.send(data)
            })
        });

module.exports = router;