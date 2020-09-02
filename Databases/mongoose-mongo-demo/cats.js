const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB!'))
  .catch(error => console.log(error.message));

const catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

const Cat = mongoose.model('Cat', catSchema);

// now you can do things like Cat.find() or Cat.create or Cat.remove() instead of using the 
// db.collectionName.remove() / .update() / .find() / .insert() from mongo.

// <-------------Create and Save Cat Long Version Start ---------------->

// const kitty = new Cat({
//   name: 'Mrs. Norris',
//   age: 7,
//   temperament: "Evil"
// });

// kitty.save((err, cat) => {
//   if (err) {
//     console.log("Something went wrong");
//   } else {
//     console.log("We just saved a cat to the database.");
//     console.log(cat);
//   }
// });

// <-------------Create and Save Cat Long Version End ---------------->


// Note that ".create" both creates AND saves.

Cat.create({
  name: "Angel White",
  age: 15,
  temperament: "Bland"
}, (err, cat) => {
  if (err) {
    console.log("Oh no, create error!");
    console.log(err);
  } else {
    console.log("Cat created!");
    console.log(cat);
  }
});

Cat.find({}, (err, cats) => {
  if (err) {
    console.log("Oh no, find error!");
    console.log(err);
  } else {
    console.log("ALL THE CATS...");
    console.log(cats);
  }
});