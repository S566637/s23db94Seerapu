var express = require('express');
const dogs_controller= require('../controllers/dogs');
var router = express.Router();
/* GET costumes */
router.get('/dogs/:id', dogs_controller.dogs_detail );
module.exports = router;

