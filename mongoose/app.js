const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017';
mongoose.connect(url + '/fruitsDB');

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  rating: {
    type: Number,
    min: [1, 'Rating must be between 1 and 10.'],
    max: [10, 'Rating must be between 1 and 10.']
  },
  review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);


const peopleSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const People = mongoose.model('people', peopleSchema);

const mango = new Fruit ({
  name: "Mango",
  rating: 7.5,
  review: "Delicious but a bit fuzzy sometimes."
});

mango.save();

People.updateOne({_id: "623cd23fc52e5f6c582ab0e4"}, {name: "Dante", age: 24, favoriteFruit: mango}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Update success");
  }
});
