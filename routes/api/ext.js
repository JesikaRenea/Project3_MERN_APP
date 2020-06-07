const express = require('express');
const router = express.Router();
const passport = require('passport');
const axios = require('axios');

require('dotenv').config(); // external key info

router.post("/web", (req, res)=>{
    console.log("at external web route")
    let inText = req.body.query.trim().replace(/\s/g, "+");
    axios({
        "method":"GET",
        "url":"https://google-search3.p.rapidapi.com/api/v1/search",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"google-search3.p.rapidapi.com",
        "x-rapidapi-key": process.env.CONTXT_WEB_KEY, 
        "useQueryString":true
        },
        "params":
        {
        "get_total":"false",
        "country":"US",
        "language":"lang_en",
        "max_results":"10",
        "uule":"",
        "hl":"us",
        "q": inText
        }
        })
        .then(result =>{
            console.log("Success");
            console.log(result.data.results);
            res.send(result.data.results);
        })
        .catch(err=>{
            console.log(err);
            res.send(err);
        });
});

router.post("/news", (req, res)=>{
    let inText = req.body.query.trim().replace(/\s/g, "+");

    axios({
        "method":"GET",
        "url":"https://google-search3.p.rapidapi.com/api/v1/search",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"google-search3.p.rapidapi.com",
        "x-rapidapi-key": process.env.CONTXT_WEB_KEY, 
        "useQueryString":true
        },
        "params":
        {
        "get_total":"false",
        "country":"US",
        "language":"lang_en",
        "max_results":"10",
        "uule":"",
        "hl":"us",
        "q":"site: rapidapi.com "+ inText
        }
        })
        .then(result =>{
            console.log("Success");
            console.log(result.data.results);
            res.send(result.data.results);
        })
        .catch(err=>{
            console.log(err);
            res.send(err);
        });
});

module.exports = router;