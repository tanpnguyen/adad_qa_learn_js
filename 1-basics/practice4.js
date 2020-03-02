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
function getBMI (mass, height){
    return mass/(height*2)
}
var propertiesOfMark = new Object();
propertiesOfMark={
    name: "Mark",
    mass: 70,
    height: 170,
    BMI : function(){
        return getBMI(this.mass, this.height)
    }
}
var propertiesOfJohn = new Object();
propertiesOfJohn={
    name: "John",
    mass: 58,
    height: 169,
    BMI : function(){
        return getBMI(this.mass, this.height)
    }
}
function printBMI (properties){
    console.log("Name: " + properties.name);
    console.log("BMI: " + properties.BMI());
}
function compareBMI(propertiesOfJohn, propertiesOfMark){

    if(propertiesOfJohn.BMI() > propertiesOfMark.BMI()){
        console.log ("John has highest BMI.");
        printBMI(propertiesOfJohn);
    }
    if (propertiesOfJohn.BMI() < propertiesOfMark.BMI()){
        console.log ("Mark has highest BMI.");
        printBMI(propertiesOfMark);
    }
    if (propertiesOfJohn.BMI() == propertiesOfMark.BMI()){
        console.log ("Mark and John have the same BMI.");
        printBMI(propertiesOfJohn);
        console.log("And: ");
        printBMI(propertiesOfMark);
    }
}
compareBMI(propertiesOfJohn, propertiesOfMark);





