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