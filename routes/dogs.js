const express = require('express');
const router = express.Router();

// Sample data for Dogs
const dogs = [
  { breed: 'Labrador', age: 3, name: 'Buddy' },
  { breed: 'German Shepherd', age: 2, name: 'Max' },
  { breed: 'Dalmatian', age: 5, name: 'Puppy' }
  // Add more dog objects as needed
];

router.get('/', (req, res) => {
  // Render the 'dogs.pug' template and pass data to it
  res.render('dogs', {
    title: 'Search Results - Dogs',
    dogs: dogs,
  });
});

module.exports = router;
