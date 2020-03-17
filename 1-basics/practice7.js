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

class BaseElement{
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends BaseElement{
    constructor(name='', buildYear=1900, area=0, treesNumber=0) {
        super(name, buildYear);
        this.area = area;
        this.treesNumber = treesNumber;
    }

    get treeDensity() {
        let treeDensity = 0;
        treeDensity = this.callTreeDensity();

        return treeDensity;
    }

    get age(){
        const age = new Date().getFullYear() - this.buildYear; 

        return age;
    }

    callTreeDensity() {
        if (this.area == 0)
            return 0;

        return this.treesNumber/this.area;
    }
}

class Street extends BaseElement{
    constructor(name='', buildYear=1900, lengthStreet=0, size=0) {
        super(name,buildYear);
        this.lengthStreet = lengthStreet;
        this.size = size;
    }

    classifyStreet() {
        let classification = new Map();
        classification.set(0 , "normal");
        classification.set(1 , "tiny");
        classification.set(2 , "small");
        classification.set(3 , "big");
        classification.set(4 , "huge");
        return classification.get(this.size);
    }
}

class Town {
    constructor (parks=[], streets=[]) {
        this.parks = parks;
        this.streets = streets;
    }

    get averageAgeOfPark () {
        return this.callAverageAgeOfPark();
    }

    callAverageAgeOfPark () {
        if (this.parks.length == 0)
            return 0;

        let sumAges = 0;
        for(let i=0; i<this.parks.length; i++)
        {
            sumAges += this.parks[i].age;
        } 

        return (sumAges/this.parks.length);
    }

    get parkNamesThousandTrees(){
        // let names = '';
        if (this.parks.length == 0)
            return [];

        let parkNames = [];
        this.parks.forEach(element => {
            if (element.treesNumber >= 1000)
            {
                parkNames.push(element.name);
            }
        });

        return parkNames;
    }

    get listTreeDensityOfEachPark () {
        let mapTreeDensityPark = new Map();
        this.parks.forEach(element => mapTreeDensityPark.set(element.name, element.treeDensity)); 
        return mapTreeDensityPark;
    }

    calTotalLengthOfStreets() {
        let totalLength = 0;
        this.streets.forEach(element => {
            totalLength += element.lengthStreet;
        });

        return totalLength;
    }

    callAverageLengthOfStreets() {
        if (this.streets.length === 0)
            return 0;
        
        const totalLength = this.calTotalLengthOfStreets();
        const avgLength = totalLength/streets.length;
        return avgLength;
    }

    classifyAllStreets()
    {
        this.streets.forEach(element => {
            console.log(element.name + ", size is " + element.classifyStreet() + "\n");
        });
    }
}

let parks = [];
parks.push(new Park('park 1', 1960, 72, 1001));
parks.push(new Park('park 2', 1978, 65, 1003));

let streets = [];
streets.push(new Street('street 1', 1935, 300, 2));
streets.push(new Street('street 2', 1969, 570));

let town = new Town(parks,streets);
// 1. Tree density of each park in the town (forumla: number of trees/park area)
console.log("Tree density of each park in the town: ");
console.log(town.listTreeDensityOfEachPark);
// town.printTreeDensityOfEachPark();


// 2. Average age of each town's park (forumla: sum of all ages/number of parks)
console.log('Average age of each town\'s park: ' + town.averageAgeOfPark);

// 3. The name of the park that has more than 1000 trees
console.log("The name of the park that has more than 1000 trees\n");
console.log(town.parkNamesThousandTrees);

// 4. Total and average length of the town's streets
console.log("Total length of the town's streets: " + town.calTotalLengthOfStreets());
console.log("Average length of the town's streets: " + town.callAverageLengthOfStreets());

// 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
console.log("Size classification of all streets \n");
town.classifyAllStreets();