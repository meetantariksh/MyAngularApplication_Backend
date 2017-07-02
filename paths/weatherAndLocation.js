var express = require('express');
var router = express.Router();
var http = require('request');
var getIP = publicIp = require('public-ip');

router.get('/getLocation', function(req, res, next){
    publicIp.v4().then(ip => {
        console.log(ip);
        http('http://ip-api.com/json/'+ip,  function (error, response, body) {
            if(error){
                console.log(error);
            }else{
                res.json(JSON.parse(response.body));
            }
        }); 
    });
});

module.exports = router;