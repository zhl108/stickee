var express = require('express');
var router = express.Router();

/* Handle register form submission: save user info into database */
router.post('/', function(req, res, next){
    if (req.body.username && req.body.password) {
        return res.json({
            'err' : false,
            'message' : 'name found in query',
            'username' : req.body.username,
            'password' : req.body.password
        })
    } else {
        return res.json({
            'err' : true,
            'message' : 'invalid request.',
            'name' : ''
        })
    }
});

module.exports = router;

