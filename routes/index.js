var express = require('express');
var router = express.Router();
const https = require('https');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.all('*', function(req, res){
//   res.redirect('aws-emmsdan-db.cehgd540dar7.us-east-1.rds.amazonaws.com')
  
// var options = {
//   hostname: 'posttestserver.com',
//   port: 443,
//   path: '/post.php',
//   method: 'POST',
//   headers: {
//        'Content-Type': 'application/x-www-form-urlencoded',
//        'Content-Length': postData.length
//      }
// };
var hostname='aws-emmsdan-db.cehgd540dar7.us-east-1.rds.amazonaws.com'
var reqi = https.request({...req, hostname }, (resp) => {
  res.send(resp)
});
//   res.send({ header: req.rawHeaders, body: req.body, params: req.params, cookies: req.cookies })
});
module.exports = router;
