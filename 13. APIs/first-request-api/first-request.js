
console.log("----------------------");
// Note that npm request should not be used in the future. Use axios instead.

// the callback (function) is what to do while waiting for the response.
const request = require('request');
request('http://www.google.com', function (error, response, body) {

  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});


request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
