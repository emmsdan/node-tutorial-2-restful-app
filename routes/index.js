var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.all(\*\, function(req, res){
  res.send({ header: req.rawHeaders, body: req.body, params: req.params, cookies: req.cookies })
});
module.exports = router;
