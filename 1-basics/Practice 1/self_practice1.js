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
/*
let and const behave exactly the same way in terms of Lexical Environments, But var is a very different
if (true) {
  var test = true; // use "var" instead of "let"
}
alert(test); // true, the variable lives after if

if (true) {
  let test = true; // use "let"
}

alert(test); // Error: test is not defined
 */

var MarkMass=50;
var JohnMass=60;
var MarkHeight=1.55;
var JohnHeight=1.72;

function calBMI(mass, height){
    return mass/(height*2);
}

var boolHigher=false;
function compareBMI(bmi1, bmi2){
    if(bmi1>bmi2){
        boolHigher=true;
    }
    return boolHigher;
}

let MarkBMI=MarkMass/(MarkHeight*2);
let JohnBMI=JohnMass/(JohnHeight*2);

if(MarkBMI>JohnBMI){
    boolHigher=true
}
if(boolHigher){
    alert("Is Mark's BMI higher than John's? true because Mark's BMI is" + MarkBMI + " and John's BIM is " + JohnBMI);
}else{
    alert("Is Mark's BMI higher than John's? false because Mark's BMI is" + MarkBMI + " and John's BIM is " + JohnBMI);
}
