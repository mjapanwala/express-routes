'use strict';

let express = require('express');

let app = express();
let port = 3000;

/**
 * Define a route on the path `/` with the `POST` method
 * Respond with the string: 'Hello, world!'
 * (3 marks)
 */
app.post('/', function(request, response) {
  response.send('Hello, world!')
})

/**
 * Define a route on the path `/` with the `DELETE` method
 * Respond with the string: 'Goodbye, world!'
 * (3 marks)
 */
app.delete('/', function(request, response) {
  response.send('Goodbye, world!')
})

/**
 * Define a route on the path `/verify/:age` with the `PUT` method
 * Respond with `true` if the user's age is greater or equal to 19 (or greater than 18)
 * Otherwise respond with `false`
 * (4 marks)
 * @see https://repl.it/@mpalmr/OptimalSecondhandPublisher
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 */
app.put('/verify/:age', function(request, response) {
  if (request.params.age > 18 || request.params.age === 19)
  response.send('true');
  else {
    response.send ('false')
  }
})



/**
 * Define a route on the path `/sum` with the `GET` method
 * console.log() the sum of all the numbers in the `sumThese` array
 * Respond with an empty string
 * (5 marks)
 */
let sumThese = [8, 4, 12, 9, 4.2];
app.get('/sum', function(require, response) {
     sumThese = sumThese[0] + sumThese[1] + sumThese[2] + sumThese [3] + sumThese [4];
     console.log(sumThese) 
     response.send('')
  });


app.listen(port, function () {
  console.log(`Express server listening on port ${port}.`);
});
