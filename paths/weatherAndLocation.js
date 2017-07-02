var express = require('express');
var router = express.Router();
var http = require('request');
var getIP = require('external-ip')();

router.get('/getLocation', function(req, res, next){
    getIP((err, ip) => {
    if (err) {
        throw err;
    }
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