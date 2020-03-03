/*****************************
* PRACTICE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

*/
//This's a function to calculate tip
var  billJohn = {
	bills: [128, 48, 268, 180, 42],
    tipCalculation: function(){
       this.tipLists = []; 
	   this.billPaid = [];
       for (var i = 0; i < this.bills.length; i++) {
            var tip;
            var bill = this.bills[i];
            if (bill < 50) {
              tip = (bill * 0.2);
            }
            else if (50 <= bill <= 200 ) {
              tip = (bill * 0.15);
            }
            else if (bill > 200){
              tip = (bill * 0.10);
            }
			else {
				tip = 0;
			}
            this.tipLists[i] = parseFloat(tip.toFixed(2));
            this.billPaid[i] = parseFloat((bill + tip).toFixed(2));
       }
	   
     }
}
billJohn.tipCalculation();
console.log ("\nTip values of John's family: " + billJohn.tipLists, "\nList of bills paid with tips: " + billJohn.billPaid);

var  billMark = {
	bills: [77, 375, 110, 45, 42],
    tipCalculation: function(){
       this.tipLists = []; 
	   this.billPaid = [];
       for (var i = 0; i < this.bills.length; i++) {
            var tip;
            var bill = this.bills[i];
            if (bill < 100) {
              tip = (bill * 0.2);
            }
            else if (bill >= 100 && bill <= 300 ) {
              tip = (bill * 0.10);
            }
            else {
              tip = (bill * 0.25);
            }
            this.tipLists[i] = parseFloat(tip.toFixed(2));
            this.billPaid[i] = parseFloat((bill + tip).toFixed(2));
       }
     }
}
billMark.tipCalculation();
console.log ("\nTip values of Mark's family: " + billMark.tipLists, "\nList of bills paid with tips: " + billMark.billPaid);

// Function to calculate Average of Tips
function calcAverage(tipLists) {
    var sum = 0;
    for(i = 0; i < tipLists.length; i++){
        sum = sum + tipLists[i];
    }
    return sum / (tipLists.length);
}

// Calculate Average of John and Mark and compare 
billJohn.average = (calcAverage(billJohn.tipLists)).toFixed(2);
billMark.average = (calcAverage(billMark.tipLists)).toFixed(2);
console.log ("\nJohn's average tip: $" + billJohn.average);
console.log ("Mark's average tip: $" + billMark.average);
if (billJohn.average > billMark.average) {
    console.log("\n John's family average tip is higher than Mark's family");
} else if (billMark.average > billJohn.average) {
    console.log("\n Mark's family average tip is higher than John's family");
}