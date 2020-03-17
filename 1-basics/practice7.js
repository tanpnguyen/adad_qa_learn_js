/*****************************
* PRACTICE 7
*/

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/
class Town{
	constructor( name, buildYear){
		this.name = name;
		this.buildYear = buildYear;
	}
}

class Parks extends Town{
	constructor(name, buildYear , numTrees, parkArea){
		super(name, buildYear);
		this.numTrees = numTrees;
		this.parkArea = parkArea;
	}
	treeDensity (){
		let parkTreeDensity = this.numTrees/this.parkArea ;    
		console.log(`${this.name} with ${this.parkArea} m2 has a tree desinty: ${parkTreeDensity}`);
	}
}

class Streets extends Town{
	constructor(name,buildYear,length,size=3){
		super(name,buildYear);
		this.length = length;
		this.size = size;
	}
	sizeClassification(){
		const sizeClass = new Map();
		sizeClass.set(1,'tiny');
		sizeClass.set(2,'small');
		sizeClass.set(3,'normal');
		sizeClass.set(4,'big');
		sizeClass.set(5,'huge');
    console.log(`The street ${this.name} built in ${this.buildYear} is classified to the ${sizeClass.get(this.size)} size.`);    
	}
}

// Parks
 const park1 = new Parks("Celadon Park",2005,2000,80000);
 const park2 = new Parks("HVT Park",1900,200000,14000);
 const park3 = new Parks("Green Tree Park",1800,300,15000);
 const parkList = [park1, park2, park3];

 // Streets
 const street1 = new Streets("D1",2000,100,1);
 const street2 = new Streets("D2",1990,200,2);
 const street3 = new Streets("ND",2015,300,3);
 const street4 = new Streets("D4",2020,400,5);
 const streetList = [street1, street2, street3, street4];

 function townReport(arrPark, arrStreet){
   
  //Report Tree Density
  //  for (let j in arrPark){ arrPark[j].treeDensity(); 
  arrPark.forEach(i => i.treeDensity());

  //Report Average Age of all 3 parks
  let totalAge=0;
  const currentYear = new Date().getFullYear();
  arrPark.forEach(j => totalAge += currentYear - j.buildYear);
	console.log(`Average of each town parks: ${(totalAge / 3)}`);

  //Report Name of each park having more than 1000 trees
   arrPark.forEach( el => { 
					if(el.trees>=1000){
						console.log(`${el.name} has more than 1000 trees`);
					}
				});
  ///Report Total Length & Average Lenghth of all streets in the town
 	let totalLength=0;
 	arrStreet.forEach(x => totalLength += x.length);
 	console.log(`\nTotal length of all streets in the twon is ${totalLength}km, with an average of ${(totalLength/4)}km.`)

  // Report Size Classified of each streets. tiny/small/normal/big/huge = 1/2/3/4/5
  
 	arrStreet.forEach(y => {
     if (y.size != NaN) y.sizeClassification();
     else {
       y.size = 3;
       y.sizeClassification();
     }    
     });
 }
townReport(parkList, streetList);
