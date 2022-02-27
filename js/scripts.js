//business logic
function Pizza(size, base, cheese, toppings, price ) {
  this.size=size
  this.base=base
  this.cheese=cheese
  this.toppings=toppings
  this.price=0
}

Pizza.prototype.calPrice=function() {
  if (this.size === "small") {
    this.price += 9;
  } else if
    (this.size === "medium") {
      this.price += 10;
  } else if
    (this.size === "large") {
      this.price += 11;
  
  if (this.base === "garlicParmesan" || this.base === "robustTomato") {
    this.price += 0;
  }
  
  if (this.cheese === "parmesan" || this.cheese === "cheese") {
    this.price +=0
  }
  if (this.toppings === "mushrooms" || this.toppings === "spinach" || this.toppings === "pineapple" || this.toppings === "onion" || this.toppings === "pepper" || this.toppings === "pepperoni" ) {
    this.price +=0
  } else if 
    (this.toppings === "chicken" || this.toppings === "bacon" || this.toppings === "chicken" || this.toppings === "sausage") {
      this.price += 3
      return this.price
  }
}


  
// UI logic
$(document).ready(function() {
  $("button").submit(function(event) {
    let size = $("input[name='optcheckbox size'):checked").val();
    let base = $("input[name='optcheckbox base'):checked").val();
    let cheese = $("input[name='optcheckbox cheese'):checked").val();
    let toppings = $("input[name='optcheckbox toppings') :checked").val();
    let newPizza =
    event.preventDefault();
    const
  
});
