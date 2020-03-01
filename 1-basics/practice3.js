/*****************************
* PRACTICE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).


*/

function calTip(bill)
{
	let tip = 0;
	let perTip = 0;
	
	perTip = (bill < 50 && bill > 0) ? 20 :
			(bill >= 50 && bill <= 200) ? 15 : 10 ;
	tip = bill * (perTip / 100);			
				
	return tip;
}

function calBillsTips(pArrBills)
{
	if (pArrBills.length == 0)
		return [];
	
	let arrTips = [];
	let tip = 0;
	for(let i=0 ; i<pArrBills.length ; i++)
	{
		tip = calTip(pArrBills[i]);
		arrTips.push(tip);
	}
	 
	return arrTips;
}

function calPaidAmouts(pArrBills)
{
	if (pArrBills.size == 0)
		return [];
	
	let paid;
	let arrPaidAmouts = [];
	for(let i=0 ; i<pArrBills.length ; i++)
	{
		paid = 0;
		bill = pArrBills[i];
		tip = calTip(pArrBills[i]);
		paid = bill + tip;		
		arrPaidAmouts.push(paid);
	}
		
	return arrPaidAmouts;
}

let arrBills = [124, 48, 268];

let arrTips = calBillsTips(arrBills);
console.log('Three tips: ' + arrTips);
 
console.log('Final paid amounts: ' + calPaidAmouts(arrBills));


