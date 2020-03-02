/*****************************
* PRACTICE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. 
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. 
Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, 
together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

*/

var arrBMIs = [];

function promtBMIInfo(fullName, mass, height){
    let lstSample = fullName + ", " + mass + ", " + height;
    let info = prompt("Please enter BMI information (FullName, Mass, Height): ", lstSample);
    addBMIObject(info)
}

function calBMI(mass, height){
    if(mass == 0){
        return 0
    }else{
        if(height == 0){
            return 0;
        }else{
            return mass/(height * 2);
        }
    }
}

function addBMIObject(info){
    let obj = {name: '', mass: 0, height: 0, bmi: 0};
    let arr = info.split(",");
    let i1 = arr[0];
    let i2 = Number(arr[1]);
    let i3 = Number(arr[2]);

    if(isNaN(i2)){
        //do nothing
    }else{
        if(isNaN(i3)){
            //do nothing
        }else{
            obj.name = i1;
            obj.mass = i2;
            obj.height = i3;
            obj.bmi = calBMI(obj.mass, obj.height);
        }
    }

    if(obj.name != ""){
        arrBMIs.push(obj);
        console.log("BMI information of " + obj.name + " are: mass - " + obj.mass + ", height - " + obj.height + ", BMI - " + obj.bmi + ".");
    }
}

function compareBMI(arrBMIs){
    let maxBMI = 0;
    let winnerList = [];
    let strResult = "";
    
    if(arrBMIs.length == 0){
        strResult = "There is no information about the highest BMI person !";
    }else{
        maxBMI = Number(arrBMIs[0].bmi);
        for (let i = 0; i < arrBMIs.length; i++) {
            if(Number(arrBMIs[i].bmi) > maxBMI){
                maxBMI = Number(arrBMIs[i].bmi);
            }
        }

        for (let i = 0; i < arrBMIs.length; i++) {
            if(Number(arrBMIs[i].bmi) == maxBMI){
                winnerList.push(i);
            }
        }

        if(winnerList.length == 1){
            strResult = arrBMIs[winnerList[0]].name + " has the highest BMI:  " + maxBMI + ".";
        }else{
            let str = ""
            for (let i = 0; i < winnerList.length; i++) {
                if(i == winnerList.length-1){
                    str += arrBMIs[winnerList[i]].name
                }else{
                    str += arrBMIs[winnerList[i]].name + ", ";
                } 
            }

            strResult = str + " also have the same highest BMI:  " + maxBMI + ".";
        }
    }
    return strResult;
}

promtBMIInfo("Mark", 50, 1.5);
promtBMIInfo("John", 60, 1.6);
let result = compareBMI(arrBMIs);
console.log(result);
alert(result);
