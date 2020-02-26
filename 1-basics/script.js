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

var Mark_Mass = 75;
var Mark_Height = 1.8;
var John_Mass = 60;
var John_Height = 1.7;

var Mark_BMI = Mark_Mass / Mark_Height ** 2;
var John_BMI = John_Mass / John_Height ** 2;

var IsMark_BMI_Higher = Mark_BMI > John_BMI;

// Output the message to HHML file
//document.write ("<br> Mark's BMI: <b>" + Mark_BMI + "</b></br>");
//document.write ("<br> John's BMI: <b>" + John_BMI + "</b></br>");
//document.write ("<p>Is Mark's BMI higher than John's BMI? <b>" + IsMark_BMI_Higher + "</b></p>");

// Print a message to console

console.log ("<p>Is Mark's BMI higher than John's BMI? <b>" + IsMark_BMI_Higher + "</b></p>");

