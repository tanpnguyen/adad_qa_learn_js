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

function BMI(pMass, pHeight)
{
	if (pHeight == 0)
		return 0;
	return pMass / (pHeight * pHeight);
}

let massOfMark = 65;
let heightOfMark = 1.7;

let massOfJohn = 72;
let heightOfJohn = 1.73;

let BMIOfMark = BMI(massOfMark, heightOfMark);

let BMIOfJohn = BMI(massOfJohn, heightOfJohn);

let message = (BMIOfMark > BMIOfJohn) ? alert ('BMI of Mark is greater than John') : alert('BMI of John is greater than Mark');

console.log('Is Mark\'s BMI higher than John\'s? ' + ((BMIOfMark > BMIOfJohn) ? true : false));
