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
function calBillsTips(pArrBills)
{
	let mapTips = new Map();
	//if (pArrBills.length == 0)
		//return 0;
	
	let tip = 0;
	let bill = 0;
	let perTip = 0;
	for(let i=0 ; i<pArrBills.length ; i++)
	{
		bill = pArrBills[i];
		perTip = (bill < 50) ? 20 :
				(bill >= 50 && bill <= 200) ? 15 :
				10 ;
		tip = bill * (perTip / 100);
		mapTips.set(pArrBills[i], tip.toFixed(2));		
	}
	 
	return mapTips;
}

function calPaidAmouts(pMapBillTips)
{
	if (pMapBillTips.size == 0)
		return [];
	
	let paid = 0;
	let arrPaidAmouts = [];
	for(let bill of pMapBillTips.keys())
	{
		//paid = bill * (1 + pMapBillTips.get(bill));
		paid = bill + Number(pMapBillTips.get(bill));
		arrPaidAmouts.push(paid);
	}
	
	return arrPaidAmouts;
}

let arrBills = [124, 48, 268];

let mapBillsTips = calBillsTips(arrBills);

//let obj = Object.fromEntries(mapBillTip.entries());
//console.log(obj);
console.log(mapBillsTips);
 
console.log('Final paid amounts: ' + calPaidAmouts(mapBillsTips));


