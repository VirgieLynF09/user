var express = require('express');
var router = express.Router();

// add db & model dependencies
var mongoose = require('mongoose');
var Car = require('../models/car');

/* GET register page. */
router.get('/session', function(req, res, next) {
  res.render('session');
});

// GET /home/add - show home input form
router.get('/session', function (req, res, next) {
    res.render('session');
});

// POST /home/add - save new car
router.post('/session', function (req, res, next) {

    // use the Car model to insert a new car
    Car.create({
        plateNumber: req.body.plateNumber,
		approximateKm: req.body.approximateKm,
		chargerStation: req.body.chargerStation,
		duration: req.body.duration
		
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
