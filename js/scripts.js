//business logic
function Pizza(size, base, cheese, toppings) {
  this.size=size;
  this.base=base;
  this.cheese=cheese;
  this.toppings=toppings;
  this.price=0;
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
  }
  if (this.base === "garlicParmesan" || this.base === "robustTomato") {
    this.price += 0;
  }
  
  if (this.cheese === "parmesan" || this.cheese === "cheese") {
    this.price +=0
  }
  
  this.price += this.toppings.length * 2;
  return this.price;
}


  
// UI logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let size = $("input:radio[name=size]:checked").val();
    let base = $("input:radio[name=base]:checked").val();
    let cheese = $("input:radio[name=cheese]:checked").val();
    let toppings = [];
    $("input[name=toppings]:checked").each(function(){
      toppings.push(this.value);
    })
    let newPizza = new Pizza(size, base, cheese, toppings);
    let price = newPizza.calPrice();
    console.log(newPizza.price);
    $(".pizza-overview").text(`We can confirm that you are ordering ${size}, ${base} with, ${cheese} pizza topped with ${toppings}.`);
    $(".pizza-price").text(`Your pizza total is ${price}`);
    $("form")[0].reset();    
  });
});