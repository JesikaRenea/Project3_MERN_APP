const express = require('express');
const router = express.Router();
const passport = require('passport');
const axios = require('axios');

require('dotenv').config(); // external key info

router.get("/web", (req, res)=>{
    console.log("at external web route")
    let inText = req.body.query.trim()/*.replace(/\s/g, "+")*/;
    axios({
        "method":"GET",
        "url":"https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"contextualwebsearch-websearch-v1.p.rapidapi.com",
        "x-rapidapi-key":process.env.CONTXT_WEB_KEY,
        "useQueryString":true
        },"params":{
        "autoCorrect":"true",
        "pageNumber":"1",
        "pageSize":"10",
        "q":inText,
        "safeSearch":"false"
        }
        })
        .then(result =>{
            console.log("Success");
            res.send(result.data.value);
        })
        .catch(err=>{
            console.log(err);
            res.send(err);
        })

});

router.get("/news", (req, res)=>{
    let inText = req.body.query.trim();

    axios({
        "method":"GET",
        "url":"https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"contextualwebsearch-websearch-v1.p.rapidapi.com",
        "x-rapidapi-key":process.env.CONTXT_WEB_KEY,
        "useQueryString":true
        },"params":{
        "autoCorrect":"false",
        "pageNumber":"1",
        "pageSize":"10",
        "q": inText,
        "safeSearch":"false"
        }
        })
        .then(result =>{
            console.log("Success");
            res.send(result.data.value);
        })
        .catch(err=>{
            console.log(err);
            res.send(err);
        })
})

module.exports = router;