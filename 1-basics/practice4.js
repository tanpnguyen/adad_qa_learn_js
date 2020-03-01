/*****************************
* PRACTICE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

*/
//This function is to calculate BMI
var x, y;
function calculationBMI(x,y){
		bmiValue = (x / (y*y));		
	return bmiValue;
};

//Declare Mark and John as an object with the calculation method.

var objMark = {
  name: "Mark",  
  mass: "50",
  height: "1.70",
  calcBMI: function(){
	return calculationBMI(this.mass,this.height);
	}
};

var objJohn = {
  name: "John",  
  mass: "65",
  height: "1.70",
  calcBMI: function(){
    return calculationBMI(this.mass,this.height);
  }
};

var arrayObject = [objMark, objJohn];
var arrayBMI = new Array();

//Show BMI of John and Mark;

for (i = 0; i <= arrayObject.length - 1; i++){
	arrayBMI[i] = arrayObject[i].calcBMI();
	console.log(arrayObject[i].name + "'s BMI: " + arrayObject[i].calcBMI());
};

// Identify the one has the highest BMI;

if(arrayBMI[0] > arrayBMI[1]){
  console.log("The one has the highest BMI is " + objMark.name);
}
else  if (arrayBMI[0] < arrayBMI[1]){
  console.log("The on has the highest BMI is " + objJohn.name);
} else {
  console.log("BMI of " + objMark.name + ' and ' + objJohn.name + ' are equal');
};

