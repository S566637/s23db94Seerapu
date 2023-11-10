const express = require('express');
const router = express.Router();
const dogs_controller = require('../controllers/dogsController');

// Your other routes...

// GET request for one dog
router.get('/dogs/:id', dogs_controller.dogs_detail);

module.exports = router;

