const axios = require("axios");

// Make a request for a user with a given ID
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    // handle success
    response.data.forEach((entry) => {
      // console.log(entry);
      console.log(`${entry.name} lives in ${entry.address.city}.`);
    });
    console.log(typeof response); // axios automatically parses JSON for you.
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
