var express = require('express');
const dogs_controlers= require('../controllers/dogs');
var router = express.Router();
/* GET dogs */
router.get('/', dogs_controlers.dogs_view_all_Page );
module.exports = router;
