var dogs = require('../models/dogs');
// List of all dogs
// exports.dogs_list = function(req, res) {
// res.send('NOT IMPLEMENTED: dogs list');
// };
// List of all dogs
exports.dogs_list = async function(req, res) {
    try{
    thedogs = await dogs.find();
    res.send(thedogs);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific Costume.
exports.dogs_detail = function(req, res) {
res.send('NOT IMPLEMENTED: dogs detail: ' + req.params.id);
};
// Handle Costume create on POST.
// exports.costume_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: Costume create POST');
// };

exports.dogs_create_post = async function(req, res) {
console.log(req.body)
let document = new dogs();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.dogs_type = req.body.dogs_type;
document.cost = req.body.cost;
document.size = req.body.size;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}

};
// Handle Costume delete form on DELETE.
exports.dogs_delete = function(req, res) {
res.send('NOT IMPLEMENTED: dogs delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.dogs_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: dogs update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.dogs_view_all_Page = async function(req, res) {
    try{
    thedogs = await dogs.find();
    res.render('dogs', { title: 'dogs Search Results', results: thedogs });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


