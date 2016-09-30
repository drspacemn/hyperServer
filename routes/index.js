var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/index.html');
});
router.get('/index.html', function(req, res, next){
	res.send("blah blach blah index");
})

module.exports = router;
