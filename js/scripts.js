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

  }
}

  
// UI logic
$(document).ready(function() {
  $("button").submit(function(event) {
    let size = $("#pizza-size").find(":selected").val();
    let base = $("#pizza-size").find(":selected").val();
    let cheese = $("#pizza-size").find(":selected").val();
    event.preventDefault();
    const
  
});
