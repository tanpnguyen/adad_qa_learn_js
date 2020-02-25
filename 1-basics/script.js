/*****************************
* PRACTICE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*/

function BMI (mass, height) {
	return mass / (height*height); 
}

var massOfMark = 70;
var heightOfMark = 1.7;

var massOfJohn = 65;
var heightOfJohn = 1.7;

var BMIOfMark = BMI (massOfMark, heightOfMark);
var BMIOfJohn = BMI (massOfJohn, heightOfJohn);

var result = true;
function compare (a, b) {
	if (a > b)
		return true;
	return false;
}

result = compare (BMIOfMark, BMIOfJohn);

console.log("Is Mark's BMI higher than John's?" + " " + result);
console.log("BMI of Mark is: " + BMIOfMark);
console.log("BMI of John is: " + BMIOfJohn);