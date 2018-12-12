//Hoisting
//only function declaration are hoisted; 
retirement(1983);

function retirement (year) {
    let total = 65 - (2019 - year);
    //console.log( `You've got ${total} until retirement, so think wisely!`); 
}

//trying to run this will throw an error;
//retire(1990);
// function expression are not hoisted; 
let retire = function (year) {
    let total = 65 - (2019 - year);
    console.log( `You've got ${total} until retirement, so think wisely!`);
}

//SCOPE CHAIN demonstration
let a = 'VO(G) _ Variable Object Global ---';
first();

function first() {
    let b = 'Inside the 1st Function! --- ';
    second();

    function second() {
        let c = 'Inside the 2nd Function! ---';
        third();
    }
}

function third() {
    let d = 'Inside the 3rd Function.';
   // console.log(c);
}

//this keyword pointing to the Object itself when called from a method attached to that Object


let person = {
    name: 'John',
    years: 35,
    calculateAge: function () {
        //it will point to the Object itself
        // because it is called inside of a method attached to the Object person;
        //console.log(this);
        console.log(this.years); 

        function innerFn() {
            //it will point to the window object
            //why? because innerFn is a regular function and it's not attached as a property to the Object
            //console.log(this);
        }
        //innerFn();
    }
}
//person.calculateAge();

let person2 = {
    name: 'Mike',
    years: 36
}

person2.calculateAge = person.calculateAge;

person2.calculateAge();


