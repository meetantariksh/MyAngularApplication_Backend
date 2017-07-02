var express = require('express');
var router = express.Router();
var unirest = require('unirest');

const mfKey = "pezRCXAsAXmshrpv8WPBkXFRMEACp1TJvxDjsn7BXoW70dmNAu";

router.get('/searchMF/:searchString', function(req, res, next){
   unirest.post("https://mutualfundsnav.p.mashape.com/")
    .header("X-Mashape-Key", mfKey)
    .header("Content-Type", "application/json")
    .header("Accept", "application/json")
    .send({"search":req.params.searchString})
    .end(function (result) {
        res.json(result.body);
    });
});

router.get('/getNAV/:mfCode', function(req, res, next){
    var code = [];
    code.push(parseInt(req.params.mfCode));
    unirest.post("https://mutualfundsnav.p.mashape.com/")
        .header("X-Mashape-Key", mfKey)
        .header("Content-Type", "application/json")
        .header("Accept", "application/json")
        .send({"scodes": code})
        .end(function (result) {
            res.json(result.body);
        });
});

module.exports = router;

