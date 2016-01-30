function Pizza(pizzaSize, pizzaQuantity) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = [];
  this.pizzaQuantity = pizzaQuantity
  this.pizzaBasePrice = 10;
}

Pizza.prototype.sizePrice = function() {
  if (this.pizzaSize === "Medium") {
    return this.pizzaBasePrice;
  } else {
  }
  return this.pizzaBasePrice + 5;
};

Pizza.prototype.toppingsPrice = function() {
  var pizzaToppings = ["Metaphysics", "FunNoodles", "Dubstep Beat Drop", "Microbes", "Feelings"];
    for (var i = 0; 1 < pizzaToppings.length; i ++ ) {
      if (pizzaToppings.indexOf( "Input" ) === [i] ) {
        print( 'Yes we have ' + search + ' in the store.');
      console.log(pizzaToppings[i]);
//
// Pizza.prototype.add = function(topping) {
//   var currentPizza = this.pizzaToppings[this.toppingsAdded];
// };


Pizza.prototype.sizePrice = function() {
  var price = 10;
  var pizzaQuantity = "";
  var userQuantity = pizzaQuantity.options[pizzaQuantity.selectedIndex].text;




    }
  }
};




// document.getElementById("myinput").onclick = function() {
//     this.select();
// };
//
// $("form#pizzaoptions").submit(function(event) {
//     var loopEnd = $("input#count-to").val();
//     var numbers = [counter(loopEnd)];
//
//     $("#output").text(numbers);
//     $("#result").show();
//     event.preventDefault();
//
//   });
//
//
// function printList ( list ) {
//   var listHTML = '<ol>';
//   for ( var i = 0; i < list.length; i ++ ) {
//     listHTML += '<li>' + list[i] + '</li>'
//   }
//   listHTML += '</ol>';
//   print(listHTML);
// }
// printList(playlist);
//
//
// var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
// var search;
//
// function print(message) {
//   document.write( '<p>' + message + '</p>');
// }
//
// while (true) {
// search = prompt("instrucitons");
//   search = search.toLowerCase();
//   if ( search === 'quit' ) {
//     break;
//   } else if (search === 'list') {
//     print ( inStock.join(', '));
//   } else {
//     if (inStock.indexOf( search ) > -1 ) {
//       print( 'Yes we have ' + search + ' in the store.');
//     } else {
//       print( search + ' is not in stock.');
//     }
//   }
// }




  // var addedToppings;
  // for ( i = 0; i < addedToppings.length; i++ ) {
  //   this.pizzaToppings[i] = [];
  // }


// var pizzaPrice = 0;



// Playlist.prototype.add = function(song) {
//   this.songs.push(song);
// };
//
// Playlist.prototype.play = function() {
//   var currentSong = this.songs[this.nowPlayingIndex];
//   currentSong.play();
// };
//
// Playlist.prototype.stop = function(){
//   var currentSong = this.songs[this.nowPlayingIndex];
//   currentSong.stop();
// };
//
// Playlist.prototype.next = function() {
//   this.stop();
//   this.nowPlayingIndex++;
//   if(this.nowPlayingIndex === this.songs.length) {
//     this.nowPlayingIndex = 0;
//   }
//   this.play();
// };
//
// Playlist.prototype.renderInElement = function(list) {
//   list.innerHTML = "";
//   for(var i = 0; i < this.songs.length; i++) {
//     list.innerHTML += this.songs[i].toHTML();
//   }
// };
