function Pizza(pizzaSize, toppings, pizzaQuantity) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = [];
  this.pizzaQuantity = pizzaQuantity
  this.pizzaTotalPrice = null;
}


Pizza.prototype.sizePriceCalc = function() {
  if (this.pizzaSize === "Medium") {
    return 0;
  } else {
  }
    return  +5;
}

Pizza.prototype.toppingsPriceCalc = function() {
  var totalToppings = this.pizzaToppings.length;
  return totalToppings ;
}

Pizza.prototype.totalPriceCalc = function() {
    return this.pizzaTotalPrice = (this.sizePriceCalc() + this.toppingsPriceCalc()) * this.pizzaQuantity;
}

$(document).ready(function() {
  $("form#pizza-options").submit(function(event) {
    event.preventDefault();
debugger;
    var inputtedSize = $("select.size").val();
    var inputtedToppings = $("select.toppings").val();
    for (var i = 0; i < this.pizzaToppings)
    var newPizza = new Pizza(inputtedSize,inputtedToppings);
    //
    // $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    // $("input#new-first-name").val("");
    // $("input#new-last-name").val("");
  });
});
