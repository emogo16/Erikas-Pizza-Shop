Describe: Pizza()

Test#1: "It should return a pizza object with the property for size" 
Code: const newPizza = new Pizza("small")
Expected Output= Pizza {size:"small, medium, or large"}

Test#2: "It should return a pizza object with two properties for size and base"
Code: const newPizza = new Pizza("small", "base")
Expected Output= Pizza {size:"small", base:"garlicParmesan"}

Test#3: "It should return a pizza object with three properties for size, base and price"
Code: const newPizza = new Pizza("small", "base", "cheese")
Expected Output= Pizza {size:"small", base:"garlicParmesan" price:"9"}

Test#4: "It should return a pizza object with four properties for size, base, cheese, toppings, and price"
Code: const newPizza = new Pizza("small", "base", "cheese", "toppings", "price")
Expected Output= Pizza {size:"small", base:"garlicParmesan" cheese:"parmesan" toppings:"mushrooms" price:"11"}

Describe: calcPrice()
Test#1: "The calcPrice() function should return 9 for a small sized pizza"
Code: const newPizza.calprice() = new Pizza("small", "garlicParmesan", "parmesan", "mushrooms")
Expected Output= $11