const express = require('express');
const router = express.Router();
const dogs_controllers = require('../controllers/dogsController');

// Your other routes...

// GET request for one dog
router.get('/dogs/:id', dogs_controllers.dogs_detail);

module.exports = router;

