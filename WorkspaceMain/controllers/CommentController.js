let express = require('express');
let router = express.Router();

let db = require('../models/DatabaseHandler');
let dbh = new db();

//Inital responses
router.get("/UpdateComment", function(req,res){
    res.render('./main/updatecomment', {title: 'Safari Security Ticket Index', layout: 'main'} );
});

router.get("/DeleteComment", function(req,res){
    res.render('./main/deletecomment', {title: 'Safari Security About Us', layout: 'main'} );
});

module.exports = router;