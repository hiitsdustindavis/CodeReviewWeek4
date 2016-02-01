describe('Pizza', function() {
  it("creates a new pizza with the given specifications", function() {
    var testPizza = new Pizza("Large", 1, 2);
    expect(testPizza.pizzaSize).to.equal("Large");
    expect(testPizza.pizzaToppings).to.eql([]);
    expect(testPizza.pizzaQuantity).to.equal(2);
  });

  it("adds the sizePriceCalc method to all pizzas", function() {
      var testPizza = new Pizza("Medium");
      expect(testPizza.sizePriceCalc()).to.equal(8);
  });

  it("adds the toppingsPriceCalc method to all pizzas", function() {
      var testPizza = new Pizza([]);
      testPizza.pizzaToppings.push("1", "2", "3")
      expect(testPizza.toppingsPriceCalc()).to.equal(3);
  });
  it("adds the totalPriceCalc method to all pizzas", function() {
      var testPizza = new Pizza("Large", [], 2);
      testPizza.pizzaToppings.push("1", "2", "3")
      expect(testPizza.totalPriceCalc()).to.equal(30);
  });
});
