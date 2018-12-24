///////////////////////////////
// Lecture: Blocks and IIFEs
    {
        // variables declared with const and let are block scoped;
        const a = 1;
        let b = 2;
        // variables declared with var keyword are function blocked and not block scped;
        var c = 3;
    }
    //console.log(a + b);
//Strings in ES6:
// let firstName = 'john';
// let lastName = 'Berdith';
// const yearOfBirth = '1983';

function calcAge(year) {
    return 2018 - year;
}
//template literals :D
    //console.log(`This is ${firstName} ${lastName} born in ${yearOfBirth} and aged ${calcAge(yearOfBirth)}`);
// we also have new strings methods in ES6 like: 
// startsWith; endsWith; includes; repeat;
    //console.log(firstName.startsWith('h')); //returns false
    //console.log(firstName.endsWith('n')); // returns true
    //console.log(firstName.includes('h')); // returns true
    //console.log(firstName.repeat(2)); // repeats john 2 times

///////////////////////////////////////////////
// Lecture: Arrow Functions and Lexical 'this';
// Atention: 
    //If you are using only one line of code you can skip the curly braces
    const years = [ 1990, 1985, 1986, 1993];
    let agesCalc = years.map( (el) => 2018 - el ); 
    let agesString = years.map( (el, index ) => `Age index ${index +1}: ${2018 - el}.`);
        //console.log(agesCalc);
        //console.log(agesString);
    // In case you are using more than 1 line of code {} are a must;
    let agesCalcStrings = years.map ( (el, index) => {
        const now = new Date().getFullYear();
        const age = now - el;
        return `Age element ${index + 1}: ${age}`; 
    })
    //console.log(agesCalcStrings);
    // => Returns in console: 
    //  [ 'Age element 1: 28',
    //    'Age element 2: 33',
    //    'Age element 3: 32',
    //    'Age element 4: 25' ]
// Lexical 'this' for Arrow Functions:
 const box = {
     color: 'green',
     position: 1,
     clickMe: (arg) => {
        let element = document.querySelector(arg);
        if(element){
            console.log(arg);
            element.addEventListener('click', () => {
                //alert(`This is a box number ${this.position} of color ${this.color}`);
             });
        }

     }
 }
//box.clickMe(".card");
let friends = ['Bob', 'Jane', 'Flint'];
let Person = {
    name: 'DEFAULT',
    last: 'DEFAULT',
    fullName: () => console.log(`Person full name is ${this.name} ${this.last}`)
}

// Person.prototype.showFriends = function (arg){
//     let arr = arg.map( el => `${this.name} is friends with ${el}`);
// }

// let colleagues = new Person('Mike').showFriends(friends);
//console.log(colleagues);
 

/////////////////////////////////////////////////////////
// Lecture: DESTRUCTURING - destructure a data structure
const [name, age] = ['John', 26];
    // console.log(name);
    // console.log(age);
const obj = {
    firstName: 'Jane',
    lastName: 'Donut'
}
//Destructuring by setting custom names for obj Properties:
const {firstName: a, lastName: b} = obj;
    // console.log(a);
    // console.log(b);
function calcAgeRetirement (year) {
    const age =  new Date().getFullYear() - year;
    return [age, 65-age];
}

const [currentAge, retirementLeft] = calcAgeRetirement(1987);
    // console.log(currentAge);
    // console.log(retirementLeft);

//////////////////
// Arrays in ES6:
// the querySelectorAll returns a node list which has to be tranformed into an array in order to be used - to do this in ES6 we use the from method which transform an element to the passed data Type;
// New Array methods in ES6 are: 
        // .from()
        // .findIndex()
        // .find()
// let cards = 
// document.querySelectorAll('.card');
//console.log(cards);
// const allCards = Array.from(cards);
// allCards.forEach(ele => ele.style.backgroundColor = 'red');
//console.log(allCards);

// for ( let el of allCards ) {
//     if(el.className.includes('blue')){
//         continue;
//     }
//     el.textContent = "It has been changed to blue";
// }

////////////////////////////
// Lecture: Spread Operator
// What Spread operator does? - It expands an array into its components;
function addAges(a, b, c, d) {
    return a + b + c + d;
}

// console.log(addAges);
let ages = [25, 33, 25, 13]
const sum = addAges(...ages);
//console.log(sum)

let familySmith = [ 'Mary', 'John', 'Bob'];
let familySolanki = [ 'Cosmina', 'Jason', 'George', 'Jasmine']; 
let christmasGathering = [ ...familySmith, ...familySolanki];
//console.log(christmasGathering);

//console.log(h);

////////////////////////////
// Lecture: Rest Parameters
// the rest parameters is used in a function declaration 
// it expands an array into its components
// The difference between the spread Operator and Rest Paramenters is
//      Spread operator is used in a function call
//      and Rest parameters are used in function declaration
// see examples below: 

let major = [ ]

function isFullAge(...arr) {
    arr.forEach( (el) => { 
    let age = 2018 - el;
    console.log(  age >= 18);
    age < arr[0] ? console.log('Not yet 18!') : "";
    })
}

//isFullAge(18, 2003, 2001, 1950, 1994);

////////////////////////////////
// Lecture: Default Parameters

function People (lastName ="Palade", firstName="Cosmina", yearOfB = "1983", nationality = "Enghlish") {
    //setting the default values for parameters: 
    this.lastName = lastName;
    this.firstName =  firstName;
    this.yearOfB = yearOfB;
    this.nationality = nationality;

    //console.log (`Our CEO and CTO is ${this.firstName} ${this.lastName} of nationality ${this.nationality}.`);
}

//People();

//////////////////////////////////////////////////////////////////
// Lecture: Maps
// What is a MAP? - a map is a new key value data structure in ES6;
// set(), get(), delete(), clear()
// also maps are iterable using forEach() 
// const question = new Map();
// question.set('question', 'What is the official name of the latest major javascript version?');
// question.set(1, 'ES7-8');
// question.set(2, 'ES7-2015');
// question.set(3, 'ES7-6');
// question.set(4, 'ES7-9');
// question.set('correct', 3);
// question.set(true, "Correct answer!");
// question.set(false, "Wrong, please try again.");
// question.delete(4);
// if(question.has(3)) { question.delete(3)};
//question.clear();
// console.log(question.get('question'));
// console.log(question.size);

// question.forEach( (val, key) => console.log(`This is ${key} set to the value ${val}`));
// for (let [key, value] of question.entries()) {
//    if(typeof(key) === 'number') {
//        console.log(`Answer ${key}: ${value}`);
//    }
// }

// const ans = parseInt(prompt('Write the correct answer'));
// question.get(ans === question.get('correct'))


//////////////////////////////////////////////////////////////////
// Lecture: Classes
//          Implementing inheritance between classes using subclasses
// Syntatic sugar for the way we do prototypal inheritance in ES6


// How we write a class in ES5 
let Person5 = function(name, job) {
    this.name = name;
    this.job = job;
}

Person5.prototype.situation = function () {
    let info = `${this.name} is a ${this.job}.`;
    return info;
}

let Person5Extended = function (name,job, hobby) {
    Person5.call(this, name,job);
    this.hobby = hobby;
}

// Setting the prototype for this Object to be Person5
Person5Extended.prototype = Object.create(Person5.prototype);

// let ath = new Person5Extended('Cosmina', 'Programmer', 'Coding');

// Person5Extended.prototype.wonTheMedal = function () {
//     return `${this.name} just won a medal in programming.\nKudos for ${this.name}!`;
// }

// console.log(ath.situation());
// console.log(ath.wonTheMedal());

// How we write a class in ES6
class Person6 {
    constructor(name, job){
        this.name = name;
        this.job = job;
    }

    situation() {
        return `${this.name} is a ${this.job}.`;
    }

    //in ES6 constructor we can also create static classes
    // what does it means? 
    // Well it means that static classes they can't be inherited;
    static greet() {
        console.log('Hi, there!');
    }
}

// extending a class with a subclass in ES6

class Author extends Person6 {
    constructor(name, job, hobby){
        super(name, job);
        this.hobby = hobby;
    }

    wonTheMedal() {
        return `${this.name} won a Medal in Programming.\nKudos to ${this.name}!`;
    }

}

const description = new Author('Cosmina', 'programmer', 'coding');
// console.log(description);
// console.log(description.wonTheMedal());


//////////////////////////////////////////////////////////////////
// Lecture: Promises
//          

const getIds =  new Promise( (resolve, reject) => {
    //executer function:
    setTimeout( () => {
        resolve([123, 15, 25, 24]);
    }, 1500); 
})

//this method is called if the promise was succesful: 
getIds.then( IDs => {
    console.log(IDs);
})







































