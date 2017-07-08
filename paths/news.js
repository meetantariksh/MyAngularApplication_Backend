var express = require('express');
var router = express.Router();
var http = require('request');

router.get('/getNews/Global', function(req, res, next){
    http('https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=d96de1b2807b4c118aca85ecdbe7d4da',  function (error, response, body) {
        if(error){
            console.log(error);
        }else{
            res.json(JSON.parse(response.body));
        }
    });
});

router.get('/getNews/India', function(req, res, next){
    http('https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey=d96de1b2807b4c118aca85ecdbe7d4da',  function (error, response, body) {
        if(error){
            console.log(error);
        }else{
            res.json(JSON.parse(response.body));
        }
    });
});

router.get('/getNews/Business', function(req, res, next){
    http('https://newsapi.org/v1/articles?source=the-economist&sortBy=top&apiKey=d96de1b2807b4c118aca85ecdbe7d4da',  function (error, response, body) {
        if(error){
            console.log(error);
        }else{
            res.json(JSON.parse(response.body));
        }
    });
});

router.get('/getNews/Tech', function(req, res, next){
    http('https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=d96de1b2807b4c118aca85ecdbe7d4da',  function (error, response, body) {
        if(error){
            console.log(error);
        }else{
            res.json(JSON.parse(response.body));
        }
    });
});

router.get('/getNews/Sports', function(req, res, next){
    http('https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=d96de1b2807b4c118aca85ecdbe7d4da',  function (error, response, body) {
        if(error){
            console.log(error);
        }else{
            res.json(JSON.parse(response.body));
        }
    });
});

router.get('/getNews/Entertainment', function(req, res, next){
    http('https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=d96de1b2807b4c118aca85ecdbe7d4da',  function (error, response, body) {
        if(error){
            console.log(error);
        }else{
            res.json(JSON.parse(response.body));
        }
    });
});

module.exports = router;