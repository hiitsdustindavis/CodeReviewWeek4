function Pizza(pizzaSize, toppings, pizzaQuantity) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = [];
  this.pizzaQuantity = pizzaQuantity
  this.pizzaTotalPrice = null;
}


Pizza.prototype.sizePriceCalc = function() {
  if (this.pizzaSize === "Medium") {
    return 8;
  } else {
  }
    return 12;
}

Pizza.prototype.toppingsPriceCalc = function() {
  var totalToppings = this.pizzaToppings.length;
  return totalToppings;
}

Pizza.prototype.totalPriceCalc = function() {
    return this.pizzaTotalPrice = (this.sizePriceCalc() + this.toppingsPriceCalc()) * this.pizzaQuantity;
}

$(document).ready(function() {
  $("form#pizza-options").submit(function(event) {
    event.preventDefault();
// debugger;
    var inputtedSize = $("select.form-control.size").val();
    var inputtedToppings = $("select.form-control.toppings").val();
    var inputtedToppingsVal = inputtedToppings.length;
    var toppingString = inputtedToppings.join(", ")
    var inputtedQuantity = parseInt($("input#quantity").val());

    var newPizza = new Pizza(inputtedSize, inputtedToppings, inputtedQuantity);
    var inputtedSizeVal = newPizza.sizePriceCalc();
    var totalPrice = (inputtedSizeVal + inputtedToppingsVal) * inputtedQuantity;

    function print(orderdetails) {
      var outputDiv = document.getElementById('output');
  		outputDiv.innerHTML = orderdetails;
    }
    $( "div#output" ).slideDown( "slow", function() {
    // Animation complete.
    $('html, body').animate({
      scrollTop: $("#output").offset().top
    }, 800);
    $("div#output").html('<div class="result container-fluid">' +
      '<div class="container">' +
        '<h3>Thank you for ordering ' +
        inputtedQuantity +
        ' <em>"' +
        toppingString +
        ' pizza(s)"</em></h3>' +
        '<h2>Your total is $' +
        totalPrice +
        '.00 dollars</h2>' +
        '<div class="video-container">' +
          '<iframe width="800px" height="450px" src="https://www.youtube.com/embed/CJEoASUMZbI" frameborder="0" allowfullscreen></iframe>' +
        '</div>' +
      '</div>' +
    '</div>');
    });
  });
});
