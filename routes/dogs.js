var express = require('express');
const dogs_controllers= require('../controllers/dogs');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
/* GET dogs */
router.get('/', dogs_controllers.dogs_view_all_Page );
// GET request for one dogs.
router.get('/dogs/:id', dogs_controllers.dogs_detail);
/* GET detail dogs page */
router.get('/detail', dogs_controllers.dogs_view_one_Page);
/* GET create costume page */
router.get('/create', dogs_controllers.dogs_create_Page);
/* GET create update page */
router.get('/update', dogs_controllers.dogs_update_Page);
/* GET delete costume page */
router.get('/delete', dogs_controllers.dogs_delete_Page);
module.exports = router;


