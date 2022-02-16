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

