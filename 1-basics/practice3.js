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

var firstBill = 124;
var secondBill = 48;
var thirdBill = 268;

function calculateTip (bill) {
	if (bill < 50 && bill > 0) {
		tip = 0.2 * bill;
	}
	else if (bill >= 50 && bill <= 200) {
		tip = 0.15 * bill;
	}
	else if (bill > 200) {
		tip = 0.1 * bill;
	}
	else if (bill <= 0) {
		return console.log("Bill required greater than 0$");
	}
	return tip;
}

function calculateFinalPaidAmounts (bill, tip) {
	if (bill <= 0 || tip <= 0) {
		return console.log ("Bill or tip required greater than 0$");
	}
	return bill + tip;
}

var tipOfFirstBill = calculateTip (firstBill);
var tipOfSecondBill = calculateTip (secondBill);
var tipOfThirdBill = calculateTip (thirdBill);

let arrayOfTip = [tipOfFirstBill, tipOfSecondBill, tipOfThirdBill];
console.log ("All three tips: " + arrayOfTip);

var totalOfFirstBill = calculateFinalPaidAmounts (firstBill, tipOfFirstBill);
var totalOfSecondBill = calculateFinalPaidAmounts (secondBill, tipOfSecondBill);
var totalOfThirdBill = calculateFinalPaidAmounts (thirdBill, tipOfThirdBill);

let arrayOfFinalPaidAmounts = [totalOfFirstBill, totalOfSecondBill, totalOfThirdBill];
console.log ("All three final paid amounts: " + arrayOfFinalPaidAmounts);