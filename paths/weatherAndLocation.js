var express = require('express');
var router = express.Router();
var http = require('request');
var ipware = require('ipware')

router.get('/getLocation', function(req, res, next){
    var ip = ipware.get_ip;
    console.log(ip);
    http('http://ip-api.com/json/'+ip,  function (error, response, body) {
        if(error){
            console.log(error);
        }else{
            res.json(JSON.parse(response.body));
        }
    });
});

module.exports = router;