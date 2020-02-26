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
let MarkMass=50;
let JohnMass=60;
let MarkHeight=1.55;
let JohnHeight=1.72;
let MarkBMI=MarkMass/(MarkHeight*2);
let JohnBMI=JohnMass/(JohnHeight*2);
var boolHigher=false;
if(MarkBMI>JohnBMI){
    boolHigher=true
}
if(boolHigher){
    alert("Is Mark's BMI higher than John's? true because Mark's BMI is" + MarkBMI + " and John's BIM is " + JohnBMI);
}else{
    alert("Is Mark's BMI higher than John's? false because Mark's BMI is" + MarkBMI + " and John's BIM is " + JohnBMI);
}
