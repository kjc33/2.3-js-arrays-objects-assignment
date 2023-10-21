/*Q1: 
1. Create an array called grades and put the following values: 56, 87, 99, 40
2. Add another element at the end of the array with value: 68
3. Remove the 1st element of the array
4. Change 40 to 60.
5. Create a variable called average and compute for the average of the grades array.
    Tip: you can create another variable as a placeholder for the sum first.
*/

let grades = [56, 87, 99, 40];
grades.push(68);
grades.shift();
grades.splice(2, 1, 60);
let sum = grades.reduce(gradeSummation);
let avg = sum / grades.length;

function gradeSummation(total, value) {
  return total + value;
}

console.log(avg);

/*Q2:
1. Create an object called vehicle with following properties:
    a. name (String)
    b. brand (String)
    c. year of make (Number)
    b. number of wheels (Number)
    e. isEnvironmentFriendly (Boolean)
Feel free to put any value.
2. Use the for-in loop to display both the properties and values of the object.
*/

const vehicle = {name:"4-Runner", brand:"Toyota", yearOfMake:2023, numberOfWheels:4, isEnvironmentFriendly:false};
let txt = "";

for (let x in vehicle) {
    txt += `${x}: ${vehicle[x]}\n`;
}

console.log(txt);

