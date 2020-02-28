/*****************************
* PRACTICE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).


*/
var bill;
var billTipList = [];
var billPaidWithTip = [];
var billList = [124,48,268];
var i;

//This's a function to calculate tip
function tipCalculation (bill){
	var tip;
	if (bill > 0 && bill < 50){
		tip = bill * 0.2;
		
	} else if (bill >= 50 && bill <= 200){
		tip = bill * 0.15;
		
	} else if (bill > 200){
		tip = bill * 0.1;
		
	} else {
		console.log("Having Invalid bill");
		tip = 0;
	}
	return tip;
}

//Genereate an array of 3 tips based on 3 bills. Bills and Bills paid are formatted with two decimals.
  
for (i = 0; i <= billList.length - 1; i++){
	//If Bill is invalid, it will be set to 0.
	if (isNaN(billList[i]) || (billList[i] === " ")) {
		billList[i] = 0;
	};
	
	billTipList[i] = tipCalculation(billList[i]);
	billTipList[i] = parseFloat(billTipList[i]).toFixed(2);
		console.log("\n Bill " + (i+1) + ": $"  + parseFloat(billList[i]*1).toFixed(2) + " has tip $" + billTipList[i]);
	billList[i] = parseFloat(billList[i]).toFixed(2);
	billPaidWithTip[i] = (+billList[i]) + (+billTipList[i]);
	billPaidWithTip[i] = parseFloat(billPaidWithTip[i]).toFixed(2);
}
console.log("\n List of Tips of all bills: " + billTipList.toString());
console.log('\n List of Bills paid with Tips: ' + billPaidWithTip.toString());



