// Module budget Controller
let budgetController = (function(){ 

    let Expense = function (id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    let Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: [],
            inc: []
        }
    }

})();

//the 2 modules are completely independent 
// SEPARATION of Concerns meaning each part is separated and are doing the things independently
//module UI Controller
let UIController = (function(){ 
    let DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value, 
                value: document.querySelector(DOMStrings.inputValue).value
            }
        },

        getDOMstrings: function () {
            return DOMStrings;
        }
    }
})();




//Module Controller
let controller = (function(budgetCtrl, UICtrl){ 

    let EventListeners =  function() {
        let btn = UIController.getDOMstrings();
        document.querySelector(btn.inputBtn).addEventListener('click', function(){
            addItem();
          });
        
          document.addEventListener('keypress', function(event){
            // console.log(event); 
            if(event.keyCode == 13 || event.which === 13 ) {
              addItem();
            }
        
          });
    }

    let addItem = () => {
      // 1. Get the field input data
      let input = UICtrl.getInput();
      console.log(input);
      // 2. Add the item to the budget controller

      // 3. Add the item to the URI

      //4. Display the budget to the UI
   }

   return {
       init: function() {
            console.log('Application has started'); 
            EventListeners();
       }
   }

})(budgetController, UIController);

controller.init();
