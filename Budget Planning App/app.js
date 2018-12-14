// Module budget Controller
let budgetController = (function(){ 
    let val = 22;
    let sum = (a) => { return a + val};
    return {
        publicTest: function(b) {
           return sum(b); 
        }
    }
})();

//the 2 modules are completely independent 
// SEPARATION of Concerns meaning each part is separated and are doing the things independently
//module UI Controller
let uiController = (function(){ 
    //Some code
})();




//Module Controller
let controller = (function(budgetCtrl, UICtrl){ 
   let z =  budgetCtrl.publicTest(4);
    return {
        anotherPublic: () => console.log(z)
    };
})(budgetController, uiController);

controller.anotherPublic();