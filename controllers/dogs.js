const mongoose = require('mongoose');
const dogs = require('../models/dogs');

// List of all dogs
exports.dogs_list = async function(req, res) {
    try {
        const thedogs = await dogs.find();
        res.send(thedogs);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

// Controller function for handling GET request for one dog
exports.dogs_detail = async function(req, res) {
    try {
        // Convert the string representation of the ObjectId to an actual ObjectId
        const dogId = mongoose.Types.ObjectId(req.params.id);

        // Retrieve the dog details from the database
        const dog = await dogs.findById(dogId);

        if (!dog) {
            // If the dog with the specified ID is not found
            res.status(404).json({ message: `Dog with ID ${req.params.id} not found` });
        } else {
            // If the dog is found, send the details in the response
            res.status(200).json(dog);
        }
    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ error: `Error retrieving dog with ID ${req.params.id}` });
    }
};

// Handle Costume create on POST
exports.dogs_create_post = async function(req, res) {
    console.log(req.body);
    const document = new dogs();
  
    document.dogs_type = req.body.dogs_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
  
    try {
        const result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

// Handle Costume delete form on DELETE
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

// Handle Costume update form on PUT
exports.dogs_update_put = async function(req, res) {
    console.log(`Update on ID ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        // Find the dog by ID
        const toUpdate = await dogs.findById(req.params.id);

        // Do updates of properties
        if (req.body.dogs_type) toUpdate.dogs_type = req.body.dogs_type;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.size) toUpdate.size = req.body.size;

        // Check if the checkbox is checked
        toUpdate.sale = req.body.checkboxsale === 'true';

        // Save the updated dog
        const result = await toUpdate.save();
        console.log("Success " + result);
        res.send(result);
    } catch (err) {
        // Handle errors
        res.status(500).send({ error: `${err}: Update for ID ${req.params.id} failed` });
    }
};

// VIEWS
// Handle a show all view
exports.dogs_view_all_Page = async function(req, res) {
    try {
        const thedogs = await dogs.find();
        res.render('dogs', { title: 'Dogs Search Results', results: thedogs });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};



