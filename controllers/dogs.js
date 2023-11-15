var dogs = require('../models/dogs');
// List of all dogs
exports.dogs_list = function(req, res) {
 res.send('NOT IMPLEMENTED: dogs list');
};
// for a specific dogs.
exports.dogs_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: dogs detail: ' + req.params.id);
};
// Handle dogs create on POST.
exports.dogs_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: dogs create POST');
};
// Handle dogs delete form on DELETE.
exports.dogs_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: dogs delete DELETE ' + req.params.id);
};
// Handle dogs update form on PUT.
exports.dogs_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: dogs update PUT' + req.params.id);
};
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

// VIEWS
// Handle a show all view
exports.dogs_view_all_Page = async function(req, res) {
    try{
    thedogss = await dogs.find();
    res.render('dogs', { title: 'dogs Search Results', results: thedogss });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // Handle dogs create on POST.
exports.dogs_create_post = async function(req, res) {
    console.log(req.body)
    let document = new dogs();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"dogs_type":"goat", "cost":12, "size":"large"}
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

   //New code for Assigment12 for screenshot1
exports.dogs_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await dogs.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

//Handle Vehicle update form on PUT
exports.dogs_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await dogs.findById(req.params.id)
        // Do updates of properties
        if (req.body.dogs_type)
            toUpdate.dogs_type = req.body.dogs_type;
        if (req.body.size) toUpdate.size = req.body.size;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
   };

   // Handle dogs delete on DELETE.
exports.dogs_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await dogs.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

   //New code added for screenshot 6
   // Handle a show one view with id specified by query
exports.dogs_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await dogs.findById( req.query.id)
    res.render('dogsdetail',
   { title: 'dogs Details', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.dogs_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('dogscreate', { title: 'dogs Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.dogs_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await dogs.findById(req.query.id)
    res.render('dogsupdate', { title: 'dogs Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.dogs_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await dogs.findById(req.query.id)
    res.render('dogsdelete', { title: 'dogs Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };



