var express = require('express');
var router = express.Router();

/* GET term page. */
router.get('/term', function(req, res, next) {
  res.render('term');
});

module.exports = router;
