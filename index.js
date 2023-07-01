// ES6 Fat arrow function.

let number = x => x * 2;
// console.log(number(30));

/**
 * Arrow function details
 */

let python = {
    name: 'Python',
    libs: ['datetime', 'zoneinfo', 'calendar', 'collections', 'heapq', 'math'],
    printLibs: function () {
        this.libs.forEach((val) => console.log(`${this.name} loves ${val}`));
    }
}


python.printLibs()

/**
 * Arrow fuction does not support new keyword
 */
function Person(name) {
    this.name = name
}

var sakib = new Person('Sakib');
console.log(sakib.name);


/**
 * Array Find 
 * Array.prototype.find()
 */


var numbers = [2, 21, 3, 4, 5, 6, 8, 7, 8, 8, 9];
let result = numbers.find((currentValue) => {
    return currentValue > 2;
});

/**
 * Array Find Index
 * Array.prototype.findIndex()
 */

let indexFind = numbers.findIndex((currentValue, currentIndex, arr) => {
    return currentValue > 300;
});

console.log(indexFind);

/**
 * Array Filter
 * Array.prototype.filter()
 */

var filtered = numbers.filter((currentValue, currentIndex, arr) => {
    return currentValue > 6;
})

console.log('filtered ', filtered);

/**
 * Array Slice
 * Array.prototype.slice
 */

let sliced = numbers.slice(1, 4);
console.log('sliced ', sliced);

/**
 * Array Splice
 * Array.prototype.splice()
 */

let spliced = numbers.slice(1, 1, 30, 50, 70);
console.log('Spliced ', spliced);
console.log('Numbers ', numbers);

/**
 * Array Concat
 * Array.prototype.concat()
 */

let names = ['Sakib', 'Sayem', 'Rifat'];
let concatedArr = names.concat(numbers);
console.log('Concated Array ', concatedArr);

/**
 * Array map
 * Array.prototype.map()
 */

let mappingNumbers = numbers.map((currentValue) => {
    return currentValue * 2;
});

console.log('mapping Numnbers ', mappingNumbers);

/**
 * Array reduce
 * Array.prototype.reduce()
 */

let reducedSum = numbers.reduce((preValue, currentValue) => {
    console.log('preValue - ', preValue);
    return preValue + currentValue;
}, 0);

console.log('Sum = ', reducedSum);

/**
 * Object
 */

let myObj = {
    name: 'Sahadat Hossain',
    company: 'Medusware',
    location: 'Mohammod pur, Dhaka',
    jobStarting: '1 March, 2022'
}

let keys = Object.keys(myObj)
let values = Object.values(myObj)
let entries = Object.entries(myObj)

// console.log(myObj);
// console.log('Keys ', keys);
// console.log('values ', values);
// console.log('entries ', entries);


/**
 * Spread Operator
 */

let numbersArr = [2, 3, 4, 5];
let newNumbers = [...numbersArr, 20, 30, 40, 50]
console.log('newNumbers ', newNumbers);

/**
 * Object Destructuring
 */

let user = {
    name: 'Sakib',
    age: 30,
    designation: 'Software Engineer',
    education: {
        degree: 'B Sc'
    }
}

const { name, age, education: { degree } = {}, } = user;
console.log('Name ', name);
console.log('Age ', age);
console.log('degree ', degree);

/**
 * Array Destructruing
 */
let nameList = ['Sayem', 'Sakib', 'Rifat'];
const [sayem] = nameList;
console.log(sayem);

let a = 10;
let b = 20;
[b, a] = [a, b];
console.log('a', a);
console.log('b', b);

import { pi, n} from "./external.js";

console.log('name ', n);
console.log('PI ', pi);