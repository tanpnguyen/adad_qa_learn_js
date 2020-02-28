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
let person1 = {
	name: "Mark",
	mass: 60,
	height: 1.7,
	getBMI (mass, height) {
		if (height == 0)
			return 0;
		return mass/(height*2);
	}
}

person1.BMI = person1.getBMI(person1.mass, person1.height)
console.log("Info of Mark: " + JSON.stringify(person1, null, 4));


let person2 = {
	name: "John",
	mass: 60,
	height: 1.7,
	getBMI (mass, height) {
		if (height == 0)
			return 0;
		return mass/(height*2);
	}
}

person2.BMI = person2.getBMI(person2.mass, person2.height)
console.log("Info of John " + JSON.stringify(person2, null, 4));

let message = (person1.BMI > person2.BMI) ? "The highest BMI is " + person1.name + ". The respective BMI is " + person1.BMI : 
        (person1.BMI < person2.BMI) ? "The highest BMI is " + person2.name + ". The respective BMI is " + person2.BMI:
        "2 people have the same BMI" ;

console.log("The BMI of Mark is " + person1.BMI);
console.log("The BMI of John is " + person2.BMI);        
console.log(message);

------------------------------------------------

function getBMI (mass, height){
	if (height == 0)
		return 0;
	return mass/(height*2);
}

let person1 = {
	"name": "Mark",
	"mass": 60,
	"height": 1.7
}


let person2 = {
	"name": "John",
	"mass": 60,
	"height": 1.7
}

person1.BMI = getBMI (person1.mass, person1.height);
person2.BMI = getBMI (person2.mass, person2.height);



let message = (person1.BMI > person2.BMI) ? "The highest BMI is " + person1.name + ". The respective BMI is " + person1.BMI : 
        (person1.BMI < person2.BMI) ? "The highest BMI is " + person2.name + ". The respective BMI is " + person2.BMI:
        "2 people have the same BMI" ;

console.log("The BMI of Mark is " + person1.BMI);
console.log("The BMI of John is " + person2.BMI);        
console.log(message);

