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

class Element {
   	constructor (name, buildYear) {
		this.name = name;
        	this.buildYear = buildYear;
    	}
}

class Park extends Element {
    constructor (name, buildYear, numberOfTrees, parkArea) {
        super (name, buildYear);
        this.numberOfTrees = numberOfTrees;	
		this.parkArea = parkArea;
    }
    calculateTreeDensity() {
        return this.numberOfTrees / this.parkArea;
    }
    calculateAgeOfPark() {
        return new Date().getFullYear() - this.buildYear;
    }
}

class Street extends Element {
    constructor (name, buildYear, length, size = 'normal') {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
}

const arrayOfPark = [new Park('First Park', 1960, 100, 50), new Park('Second Park', 1975, 1000, 2000), new Park('Third Park', 1996, 9999, 1111)];
const arrayOfStreet = [new Street('First Street', 1950, 100, 'tiny'), new Street('Second Street', 1990, 500, 'small'), new Street('Third Street', 2000, 1000), new Street('Fourth Street', 2010, 5000, 'big')];

function calculateTreeDensityOfPark() {
    for (const park of arrayOfPark) {
        console.log('The tree density of ' + park.name + ' is ' + park.calculateTreeDensity() + ' per square m');
    }
}

function calculateAverageAgeOfPark() {
    let sumOfAge = 0;
    arrayOfPark.forEach((park) => {
        sumOfAge += park.calculateAgeOfPark();
    });
    console.log('Average age of town park is ' + sumOfAge / arrayOfPark.length + ' years');
}

function findParkHasMoreThan1000Trees() {
    for (const park of arrayOfPark) {
        if (park.numberOfTrees >= 1000)
	        console.log(park.name + ' has more than 1000 trees. The number of trees is ' + park.numberOfTrees);
    }
}

function calculateTotalAndAverageLengthOfStreets() {
    let sumOfLength = 0;
    arrayOfStreet.forEach((street) => {
        sumOfLength += street.length;
    });
    console.log('Total length of all streets is ' + sumOfLength + ' m. Average length is ' + sumOfLength / arrayOfStreet.length + ' m');
}

function sizeClassificationOfAllStreets() {
    arrayOfStreet.forEach((street) => {
        console.log('The size of ' + street.name + ' is ' + street.size);
    });
}

(function() {
    calculateTreeDensityOfPark();
    calculateAverageAgeOfPark();
    findParkHasMoreThan1000Trees();  
    calculateTotalAndAverageLengthOfStreets();
    sizeClassificationOfAllStreets();
})();