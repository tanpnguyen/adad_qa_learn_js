/*****************************
* PRACTICE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
*/

var arrTip = [];
var arrFinalAmount = [];

function promtBill(bill1, bill2, bill3){
    let lstSample = bill1 + ", " + bill2 + ", " + bill3;
    let billList = prompt("Please input all the bill ($) that John and his family went: ", lstSample);
    return billList;
}

function calTipAndFinalAmount(billList){
    let arr = billList.split(",");
    let iTip = 0;
    let iAmount = 0;
    
    if(arr.length > 0){
        for (let i = 0; i < arr.length; i++) {
            let iNum = Number(arr[i]);
            if(isNaN(iNum)){
                arrTip.push("No tip");
                arrFinalAmount.push("Invalid bill");
            }else{
                if(iNum == 0){
                    arrTip.push(0);
                    arrFinalAmount.push(0);
                }else{
                    if(iNum < 50){
                        iTip = (20 * iNum)/100;
                        iAmount = iNum + iTip;
                        arrTip.push(iTip);
                        arrFinalAmount.push(iAmount);
                    }else{
                        if(iNum > 200){
                            iTip = (10 * iNum)/100;
                            iAmount = iNum + iTip;
                            arrTip.push(iTip);
                            arrFinalAmount.push(iAmount);
                        }else{
                            iTip = (15 * iNum)/100;
                            iAmount = iNum + iTip;
                            arrTip.push(iTip);
                            arrFinalAmount.push(iAmount);
                        }
                    }
                }
            }
        }
    }
}

let iList = promtBill(124, 48, 268);
calTipAndFinalAmount(iList);
console.log("The bill list of each restaurant are: " + iList);
console.log("The tips of each restaurant are: " + arrTip);
console.log("The final amount of each restaurant are: " + arrFinalAmount);