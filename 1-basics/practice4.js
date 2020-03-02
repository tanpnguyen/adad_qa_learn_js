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
			
function isEmpty(obj) 
{
  for (let key in obj) 
  {
		return false;
  }
  
  return true;
}

function makeUser(pName, pMass, pHeight, pBMI)
{
	let name = (pName === undefined || pName === null ) ? '' : pName;
	let mass = (pMass === undefined || pMass === null ) ? 0 : pMass;
	let height = (pHeight === undefined || pHeight === null ) ? 0 : pHeight;
	let bmi = (pBMI === undefined || pBMI === null ) ? 0 : pBMI;
	
	return {name , mass, height, bmi};
}
	
function BMI(pMass, pHeight)
{
	if (pHeight == 0)
	{
		console.log('height : 0');
		return 0;
	}
	
	return pMass / (pHeight * pHeight);
}

function getMaxBMI(pArrUsers)
{
	if (pArrUsers.length == 0)
		return -1;
	
	let maxBMI = pArrUsers[0].bmi;
	let bmi = 0;
		
	for(let i=1; i<pArrUsers.length; i++)
	{
		bmi = pArrUsers[i].bmi;
		
		if (bmi > maxBMI)
		{
			maxBMI = bmi;
		}
	}
	return maxBMI;
}

function getUsersHighestBMI(pArrUsers)
{
	let maxBMI = getMaxBMI(pArrUsers);
	if (maxBMI == -1)
	{
		console('there are no user has max BMI');
		return [];
	}
		
	let arrUsersHighestBMI = [];
	for (let i=0; i<arrUsers.length; i++)
	{
		if (arrUsers[i].bmi >= maxBMI)
		{
			arrUsersHighestBMI.push(arrUsers[i]);
		}
	}
	return arrUsersHighestBMI;
}

let user1 = makeUser('John', 72, 1.73);
let user2 = makeUser('Mark', 65, 1.7);
let user3 = makeUser('Mary', 48, 1.6);
let user4 = makeUser('Leo', 72, 1.73);
// Calculate BMI of each user
user1.bmi = BMI(user1.mass, user1.height);
console.log(user1);
user2.bmi = BMI(user2.mass, user2.height);
console.log(user2);
user3.bmi = BMI(user3.mass, user3.height);
console.log(user3);
user4.bmi = BMI(user4.mass, user4.height);
console.log(user4);
let arrUsers = [user3, user2, user1, user4];
console.log('The list of users has highest BMI:');
console.log(getUsersHighestBMI(arrUsers));










