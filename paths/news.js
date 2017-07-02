var express = require('express');
var router = express.Router();
var http = require('request');

const options = {
  hostname: 'newsapi.org/v1/articles?source=techcrunch&apiKey=d96de1b2807b4c118aca85ecdbe7d4da',
  method: 'GET'
};

router.get('/getNews', function(req, res, next){
    http('https://newsapi.org/v1/articles?source=techcrunch&apiKey=d96de1b2807b4c118aca85ecdbe7d4da',  function (error, response, body) {
        if(error){
            console.log(error);
        }else{
            res.json(JSON.parse(response.body));
        }
    });
});

module.exports = router;