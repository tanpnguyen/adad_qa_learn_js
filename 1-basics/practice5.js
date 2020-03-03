/*****************************
* PRACTICE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, 
create 
1) a new array containing all tips, and 
2) an array containing final paid amounts (bill + tip). 
HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. 
The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 
10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. 
HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). 
After you have the sum of the array, 
divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

*/

function promtBill(name, bill1, bill2, bill3, bill4, bill5){
    let lstSample = name + ", " + bill1 + ", " + bill2 + ", " + bill3 + ", " + bill4 + ", " + bill5;
    let billInfo = prompt("Please input name and all the bill($) that his/her family went to those restaurants: ", lstSample);
    return billInfo;
}

var arrTip = [];
var arrFinalAmount = [];
var arrAverageTips = [];

function addBillToMap(billInfo, tip1, tip2, tip3, range1, range2){
    let obj = {name: '', averageTip: 0};
    let arr = billInfo.split(",");
    if(arr.length > 1){
        obj.name = arr[0];

        let arrBill = [];

        for(let i = 1; i < arr.length; i++){
            arrBill.push(arr[i]);
        } 

        let averTip = calTipAndFinalAmount(arrBill, tip1, tip2, tip3, range1, range2);
        obj.averageTip = averTip;
        arrAverageTips.push(obj);
        console.log("Name: " + obj.name + " and valid bills are: " + arrBill + ".");
        console.log("Name: " + obj.name + " and the average tip is: " + averTip + ".");
    } 
}

function calTipAndFinalAmount(arrBill, tip1, tip2, tip3, range1, range2){
    let iTip = 0;
    let iAmount = 0;
    let sumTip = 0;
    let sumCount = 0;
    
    if(arrBill.length > 0){
        for (let i = 0; i < arrBill.length; i++) {
            let iNum = Number(arrBill[i]);
            if(isNaN(iNum)){
                arrTip.push("No tip");
                arrFinalAmount.push("Invalid bill");
            }else{
                if(iNum == 0){
                    arrTip.push(0);
                    arrFinalAmount.push(0);
                }else{
                    if(iNum < Number(range1)){
                        iTip = (Number(tip1) * iNum)/100;
                        iAmount = iNum + iTip;
                        arrTip.push(iTip);
                        arrFinalAmount.push(iAmount);
                        sumTip += iTip;
                        sumCount += 1;
                    }else{
                        if(iNum > Number(range2)){
                            iTip = (Number(tip3) * iNum)/100;
                            iAmount = iNum + iTip;
                            arrTip.push(iTip);
                            arrFinalAmount.push(iAmount);
                            sumTip += iTip;
                            sumCount += 1;
                        }else{
                            iTip = (Number(tip2) * iNum)/100;
                            iAmount = iNum + iTip;
                            arrTip.push(iTip);
                            arrFinalAmount.push(iAmount);
                            sumTip += iTip;
                            sumCount += 1;
                        }
                    }
                }
            }
        }
    }

    return sumTip/sumCount;
}

function compareAverageTips(){
    let maxBMI = 0;
    let winnerName = ";"
    let strResult = "";
    
    if(arrAverageTips.length == 0){
        strResult = "There is no information about the highest average bill!";
    }else{
        maxBMI = Number(arrAverageTips[0].averageTip);
        for (let i = 0; i < arrAverageTips.length; i++) {
            if(Number(arrAverageTips[i].averageTip) > maxBMI){
                maxBMI = Number(arrAverageTips[i].averageTip);
                winnerName = arrAverageTips[i].name;
            }
        }

        strResult = winnerName + " and his/her family has the highest average bill :  " + maxBMI + ".";
    }
    return strResult;
}

let billInfo = promtBill("John", 124, 48, 268, 180, 42);
addBillToMap(billInfo, 20, 15, 10, 50, 200);
console.log("The tips of each restaurant are: " + arrTip);
console.log("The final amount of each restaurant are: " + arrFinalAmount);

billInfo="";
arrTip = [];
arrFinalAmount = [];
billInfo = promtBill("Mark", 77, 375, 110, 45, 0);
addBillToMap(billInfo, 20, 15, 10, 100, 300);
console.log("The tips of each restaurant are: " + arrTip);
console.log("The final amount of each restaurant are: " + arrFinalAmount);

let str = compareAverageTips();
console.log(str);
alert(str);