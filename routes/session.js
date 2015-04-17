var express = require('express');
var router = express.Router();

/* GET register page. */
router.get('/session', function(req, res, next) {
  res.render('session');
});

module.exports = router;
