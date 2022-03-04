const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++
}

// Write a for loop that prints out the contents of ingredients:
for (let x = 0; x < ingredients.length; x++) {
  console.log(ingredients[x]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let y = (ingredients.length - 1); y >= 0; y--) {
  console.log(ingredients[y]);
}

/*
1. The function takes 3 integer parameters: start, end, and step.
2. The function should return an array of numbers from start to end counting by step.
3. The function should return an empty array [] if given incorrect parameters, such as:

start, end, or step being undefined
start being greater than end
step being 0, or negative
*/
let range = function (start, end, step) {
  let finalArray = [];
  if (start == null || end == null || step == null || (start > end) || (step <= 0)) {
    return finalArray;
  }
  else {
    let val = start;
    finalArray.push(val);
    let i = start;
    while (i <= end) {
      val = val + step;
      i = val;
      if (val <= end){
        finalArray.push(val);
      }
      
    }
    return finalArray;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

/*
When this function is given an array and a value, it should return the index 
of the last time the value occurs in the array. If the value never occurs, the function should return -1.
*/

let lastIndexOf = function (arr, val) {
  let lastIndexValue = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      lastIndexValue = i; 
    }
  }
  return lastIndexValue;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);


//Array concatenation example
let concat = function (arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);