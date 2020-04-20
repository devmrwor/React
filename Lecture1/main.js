// Topic 1 : let and const

// Before ES6 
var name = 'Satvik';

// After ES6
let name1 = 'Satvik';
const name2 = 'Satvik';

// var VS let VS const

// let is block scoped. What that means is that a variable created with the let keyword is available inside the “block” that it was created in as well as any nested blocks. When I say “block”, I mean anything surrounded by a curly brace {} like in a for loop or an if statement.

//   ReferenceError when accessing a variable before it's declared



// var is function scoped
// undefined when accessing a variable before it's declared


// let can be re-assigned, but variables declared with const can’t be.



// Topic 2 : Fat Arrow Functions

function getName(name) {
    console.log(name);
}

const getOtherName1 = () => {
    return 'some value';
}

const getOtherName2 = name => {
    return console.log(name);
}

const getOtherName3 = name => console.log(name);

const getOtherName4 = (name, age) => console.log(name, age);



// Topic 3 : Hoisting 

// Case 1:
x = 5;
console.log(x);
var x;

// Case 2:
var y;
y = 5;
console.log(y);

// Observe output in above two cases

// Key points to remember :
// Variables and constants declared with let or const are not hoisted!
// JavaScript only hoists declarations, not initializations.



// Topic 4 : Object and Template Literals

const objectName = {
    name: 'satvik',
    age: 'age'
};

const tmpLit = `My name is ${objectName.name} and my age is ${objectName.age}`;



// Topic 5 : Destructuring arrays and objects

const arr = [10, 20];
[b, a] = arr;
console.log(b, a);

const objectName1 = {
    key1: 'val1',
    key2: 'val2'
}

const { key2, key1 } = objectName1;
console.log(key2, key1);



// Topic 6 : Rest and Spread Operator

// Rest Operator
var myName = ["Satvik", "Saransh", "Muskan"];
const [firstName, ...familyName] = myName;
console.log(firstName); // Satvik ;
console.log(familyName); // [ "Saransh" , "Muskan"] ;

// Spread Operator
var myName = ["Satvik", "Saransh", "Muskan"];
var newArr = [...myName, "FrontEnd", 24];
console.log(newArr); // ["Satvik" , "Saransh" , "Muskan" , "FrontEnd" , 24 ] ;



// Topic 7 :  Classes
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Instantiate
const person = new Person('Satvik', 'Chachra');
