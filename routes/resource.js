var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var dogs_controller = require('../controllers/dogs');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/dogs', dogs_controller.dogs_create_post);
// DELETE request to delete Costume.
router.delete('/dogs/:id', dogs_controller.dogs_delete);
// PUT request to update Costume.
router.put('/dogs/:id', dogs_controller.dogs_update_put);
// GET request for one Costume.
router.get('/dogs/:id', dogs_controller.dogs_detail);
// GET request for list of all Costume items.
router.get('/dogs', dogs_controller.dogs_list);
module.exports = router;