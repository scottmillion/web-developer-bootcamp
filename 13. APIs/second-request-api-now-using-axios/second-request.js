const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    // handle success
    console.log(response);
    console.log(response.data);
    console.log(response.data.title);
    console.log(response.data.id);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(function (response) {
    // handle success
    console.log(response);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


// Another way to do it using async/await
(async () => {
  // Make a request for a user with a given ID
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response.data);
    console.log("User Id:", response.data.userId);
  } catch (err) {
    console.log(err);
  }

})()