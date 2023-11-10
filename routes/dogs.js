var express = require('express');
const dogs_controlers= require('../controllers/dogs');
var router = express.Router();
/* GET dogs */
router.get('/dogs/:id', dogs_controller.dogs_detail);
module.exports = router;
