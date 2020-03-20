/*****************************
* PRACTICE 7
*/

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. 
All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. 
If the size is unknown, the default is normal

All the report data should be printed to the consolex.

HINT: Use some of the ES6 features: 
classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Town {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Parks extends Town {
    constructor(name, buildYear, area, numsOfTree){
        super(name, buildYear);
        this.area = area;
        this.numsOfTree = numsOfTree;
    }

    treeDensity() {
        //1. Tree density of each park in the town (forumla: number of trees/park area)
        var density = Number(this.numsOfTree)/Number(this.area);
        console.log(`Tree density of park ${this.name} is ${density}.`);
    }
}

class Street extends Town {
    constructor(name, buildYear, length, size){
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    //5. Size classification of all streets: tiny/small/normal/big/huge. 
    //If the size is unknown, the default is normal
    sizeClassification(){
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`Size classification street of park ${this.name} is ${classification.get(this.size)}.`);

    }
}

function promptParkInfo(name, buildYear, area, numsOfTree){
    let lst = `${name},${buildYear},${area},${numsOfTree}` 
    let info = prompt("Please input Park in include name, build year, area and number of trees", lst);
    return info;
}

function promptStreetInfo(name, buildYear, length, size){
    let lst = `${name},${buildYear},${length},${size}` 
    let info = prompt("Please input Park in include name, build year, street length and street size with number from 1 to 5", lst);
    return info;
}

function parkReport(arr) {
    //1. Tree density of each park in the town (forumla: number of trees/park area)
    //2. Average age of each town's park (forumla: sum of all ages/number of parks)
    //3. The name of the park that has more than 1000 trees
    let sum = 0; 
    let str1000treesResults = `Park that has more than 1000 trees are \n`
    arr.forEach((e) => {
        e.treeDensity();
        sum += (new Date().getFullYear() - Number(e.buildYear));
        if(e.numsOfTree > 1000){
            str1000treesResults += `Park name: ${e.name} - number of trees: ${e.numsOfTree} \n`
        }
    });

    let avr = sum/arr.length;
    console.log(`The average age of town's park is ${avr}`);
    console.log(str1000treesResults);

}

function streetReport(arr){
    //4. Total and average length of the town's streets
    //5. Size classification of all streets: tiny/small/normal/big/huge. 
    //If the size is unknown, the default is normal
    let sum = 0;
    arr.forEach(e => {
        sum += e.length;
        e.sizeClassification();
    });

    let avr = sum/arr.length;
    let str = `The town's street have total length of streets is ${sum} \n`
    str += `The town's street have the average length of street is ${avr}`
    console.log(str);
}

var arrParks = [];
var arrStreets = [];

function addParkStreetToArray(parkstreetInfo, type){
    let arr = parkstreetInfo.split(",");
    let name = arr[0]
    let buildY = Number(arr[1]);
    let thirdE = Number(arr[2]);
    let forthE = Number(arr[3]);

    if(type == 0){
        let park = new Parks();
    
        park.name = name;
        park.buildYear = buildY;
        park.area = thirdE;
        park.numsOfTree = forthE;
        arrParks.push(park);
    }else{
        let street = new Street();
    
        street.name = name;
        street.buildYear = buildY;
        street.length = thirdE;
        street.size = forthE;
        arrStreets.push(street);
    }
}

let park1 = promptParkInfo("Tao Dan", 1956, 900, 1001);
addParkStreetToArray(park1, 0)
let park2 = promptParkInfo("Le Van Tam", 1972, 600, 110);
addParkStreetToArray(park2, 0)
let park3 = promptParkInfo("Le Thi Rieng", 1943, 1000, 1100);
addParkStreetToArray(park3, 0)
let street1 = promptStreetInfo("Pham Viet Chanh", 1945, 200, 1);
addParkStreetToArray(street1, 1)
let street2 = promptStreetInfo("Bui Thi Xuan", 1947, 500, 2);
addParkStreetToArray(street2, 1)
let street3 = promptStreetInfo("Tran Phu", 1953, 1500, 3);
addParkStreetToArray(street3, 1)
let street4 = promptStreetInfo("Nguyen Thi Minh Khai", 1942, 2500, 4);
addParkStreetToArray(street4, 1)

parkReport(arrParks);
streetReport(arrStreets);