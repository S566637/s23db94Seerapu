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
// Import the Dogs model
const Dogs = require('../models/dogs');

// Controller function for handling GET request for one dog
exports.dogs_detail = async function(req, res) {
    console.log("detail" + req.params.id);
    try {
        const result = await Dogs.findById(req.params.id);

        if (!result) {
            // If the dog with the specified ID is not found
            res.status(404).json({ message: `Dog with ID ${req.params.id} not found` });
        } else {
            // If the dog is found, send the details in the response
            res.status(200).json(result);
        }
    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ error: `Error retrieving dog with ID ${req.params.id}` });
    }
};

// Handle Costume create on POST.
// exports.costume_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: Costume create POST');
// };

// Create a new dog
exports.dogs_create_post = async function(req, res) {
    console.log(req.body);
    let document = new dogs();
  
    document.dogs_type = req.body.dogs_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
  
    try {
      let result = await document.save();
      res.send(result);
    } catch (err) {
      res.status(500).send(`{"error": ${err}}`);
    }
  };
  
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}

// Handle Costume delete form on DELETE.
exports.dogs_delete = async function(req, res) {
    try {
      const dogId = req.params.id;
      const deletedDog = await dogs.findByIdAndDelete(dogId);
  
      if (!deletedDog) {
        return res.status(404).json({ message: 'Dog not found' });
      }
  
      res.status(200).json({ message: 'Dog deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
// Handle Costume update form on PUT.
// Update a dog
// Update a dog
// Handle Dog update form on PUT.
exports.dogs_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await Dogs.findById(req.params.id);

        // Do updates of properties
        if (req.body.dogs_type) toUpdate.dogs_type = req.body.dogs_type;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.size) toUpdate.size = req.body.size;

        // Check if the checkbox is checked
        if (req.body.checkboxsale) {
            toUpdate.sale = true;
        } else {
            toUpdate.sale = false;
        }

        let result = await toUpdate.save();
        console.log("Success " + result);
        res.send(result);
    } catch (err) {
        res.status(500).send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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


