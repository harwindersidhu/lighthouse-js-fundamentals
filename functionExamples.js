const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

var chooseStations = function (stations) {
  var finalStations = [];
  for(let station of stations) {
    var name = station[0];
    var capacity = station[1];
    var venue = station[2];
    if (capacity >= 20 && (venue === "school" || venue === "community centre")){
      finalStations.push(name);
    }
  }
  return finalStations;
}

console.log(chooseStations(stations));

const finalPosition = function (moves) {
  var x = 0;
  var y = 0;
  for (let move of moves) {
    switch (move) {
      case "north":
        y = y + 1;
        break;
      case "south":
        y = y - 1;
        break;
      case "east":
        x = x + 1;
        break;
      case "west":
        x = x - 1;
        break;
      default:
        break;
    }
  }
  var finalPos = [x,y];
  return finalPos;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));

// Define a function called ageCalculator. This function should take 3 parameters:

// name – a string representing someone's name
// yearOfBirth – a number representing their year of birth
// currentYear – a number representing the current year
// The ageCalculator function should return a string explaining how old the person is. 
// For example, if we called ageCalculator("Suzie", 1983, 2015);, the return value should be as follows.

let ageCalculator = function (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  let final = name + " is " + age + " years old.";
  return final;
}

console.log(ageCalculator("Suzie", 1983, 2015));

let howManyHundreds = function(num) {
  let hundreds = parseInt(num / 100);
  return hundreds;
}
console.log(howManyHundreds(894));

let calculateRectangleArea = function (length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  }
  else {
    return length * width;
  }
}

let calculateTriangleArea = function (base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  }
  else {
    return (base * height)/2;
  }
}

let calculateCircleArea = function (radius) {
  if (radius < 0) {
    return undefined;
  }
  else {
    return Math.PI * radius * radius;
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); 

