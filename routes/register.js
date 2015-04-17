var express = require('express');
var router = express.Router();

// add db & model dependencies
var mongoose = require('mongoose');
var Car = require('../models/car');

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register');
});

// GET /home/add - show home input form
router.get('/register', function (req, res, next) {
    res.render('register');
});

// POST /home/add - save new car
router.post('/register', function (req, res, next) {

    // use the Car model to insert a new car
    Car.create({
		plateNumber:req.body.plateNumber,
		manufacture: req.body.manufacture,
		model: req.body.model,
		year: req.body.year,
		category: req.body.category,
		postalCode: req.body.postalCode,

    }, function (err, Car) {
        if (err) {
            console.log(err);
            res.render('error', { error: err }) ;
        }
        else {
            console.log('Car saved ' + Car);
            res.render('message', { car: Car.plateNumber });
        }
    });
});

module.exports = router;
