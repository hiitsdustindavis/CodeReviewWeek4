describe('Pizza', function() {

  it("creates a new pizza with the given specifications", function() {
    var testPizza = new Pizza("Large");
    expect(testPizza.pizzaSize).to.equal("Large");
    expect(testPizza.pizzaToppings).to.eql([]);
    expect(testPizza.toppingsAdded).to.equal(0);
  });

  it("adds the addedToppings method to all pizzas", function() {
      var testPizza = new Pizza("Feelings","Multiple Ben Afflecks");
      expect(testPizza.toppingsAdded).to.equal(0);
  });

});
