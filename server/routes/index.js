const express = require('express');
const router = express.Router();
const slackAPI = require('../apis/slack');


/* GET home page. */
router.get('/', function(req, res, next) {
    slackAPI.getApprentices()
        .then((apprentices) => { res.json(apprentices) })
        .catch((err) => {
            console.log('Error', err.stack);
            res.status(500).json(err);
        })
});

module.exports = router;
