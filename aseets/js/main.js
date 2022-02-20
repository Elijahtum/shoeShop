document.getElementById("intro_Message").innerHTML = `Best Online Shop! Order Now And we deliver to your Door!`;

//Class creation calculating Current Year
class introduction {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  let myYear = new introduction("January", 2018);
  document.getElementById("intro").innerHTML =
  "The Shop is " + myYear.age() + " years old.";

// Date Checker Function
function displayDate() {
    document.getElementById("Time_trial").innerHTML = Date();
  };

//Object Method
const person = {
    firstName:"Founded By Eli.",
    lastName:"kokwet Business Empire",
    id: 1016,
    fullName: function (){
        return this.firstName + "    " + this.lastName;
    }
}
document.getElementById("Person").innerHTML = person.fullName();

//

/*
// Define an object
const obj = {counter : 0};

// Play with counter:
obj.reset;
obj.add = 10;
obj.subtract = 1;
obj.increment;
obj.decrement;

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

document.getElementById("counter_Demo").innerHTML = obj.counter;
*/

