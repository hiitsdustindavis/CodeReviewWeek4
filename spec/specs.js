describe('Pizza', function() {

  it("creates a new pizza with the given specifications", function() {
    var testPizza = new Pizza("Large", 1);
    expect(testPizza.pizzaSize).to.equal("Large");
    expect(testPizza.pizzaToppings).to.eql([]);
    expect(testPizza.pizzaQuantity).to.equal(1);
  });

  it("adds the addedToppings method to all pizzas", function() {
      var testPizza = new Pizza("Feelings","Multiple Ben Afflecks");
      expect(testPizza.toppingsAdded).to.equal(0);
  });

});
