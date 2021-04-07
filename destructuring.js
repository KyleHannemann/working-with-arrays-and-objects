/*
  Once you complete a problem, refresh ./destructuring.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

//Code Here

var color = carDetails.color;
var model = carDetails.model;
var make = carDetails.make;
var year = carDetails.year;


////////// PROBLEM 2 //////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting( obj ) {
  //Code Here
 var title = obj.title;
 var firstName = obj.firstName;
 var lastName = obj.lastName; 
  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}



////////// PROBLEM 3 //////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

//Code Here
var states = {
  utah: 10,
  cal: 110,
  texas: 10
}
function totalPopulation(obj){
  var totalPop = 0;
  for (var pop in obj){
      totalPop += obj[pop];
  }
  return totalPop;
}
////////// PROBLEM 4 //////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

//Code Here

function ingredients(obj){
  var nutrients = [];
  for (var value in obj){
    nutrients.push(obj[value]);
  }
  return nutrients;
}

////////// PROBLEM 5 //////////

/*
  Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration.
  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }

  Write a function called largeNumbers that will take a destructured object as it's parameter.
  The object properties will be named first, second, and third and their values will be numbers.
  Find the smallest number of the three and return that number.
*/

//Code Here

function largeNumbers({first, second, third}){
  if ((first < second) && (first < third)){
    return first;
  }
  if ((second < first) && (second < third)){
    return second;
  }
  if ((third < second) && (third < first)){
    return third;
  }
}
var z = {
  first: 4,
  second: 6,
  third: 7
}
var x = largeNumbers(z);
x

////////// PROBLEM 6 //////////

/*
  Write a function called numberGroups that will take a destructured object as it's parameter.
  The object properties will be named a, b, and c and their values will be arrays of numbers.
  Find the longest array and return that array.
*/

//Code Here

function numberGroups({a,b,c}){
   if ((a.length > b.length) && (a.length > c.length)){
     return a;
   }
   if ((a.length < b.length) && (b.length > c.length)){
     return b;
   }
   if ((c.length > b.length) && (a.length < c.length)){
     return c;
   }
}
