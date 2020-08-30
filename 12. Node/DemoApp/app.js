var catMe = require("cat-me");

console.log(catMe());

var knockknock = require("knock-knock-jokes");

console.log(knockknock());

var faker = require("faker");

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties
console.log("--------------");
console.log(randomName);
console.log(randomEmail);
console.log("--------------");
console.log(randomCard);
console.log(faker.image.nature());

function printProductNamesAndPrices(quantity) {
  for (let i = 0; i < quantity; i++) {
    console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
  }
}

printProductNamesAndPrices(10);
