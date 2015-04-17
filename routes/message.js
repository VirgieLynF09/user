var express = require('express');
var router = express.Router();

/* GET message page. */
router.get('/message', function(req, res, next) {
  res.render('message');
});

module.exports = router;