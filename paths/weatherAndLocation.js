var express = require('express');
var router = express.Router();
var http = require('request');

router.get('/getLocation/:ip', function(req, res, next){
    http('http://ip-api.com/json/'+ip,  function (error, response, body) {
        if(error){
            console.log(error);
        }else{
            res.json(JSON.parse(response.body));
        }
    }); 
});

module.exports = router;