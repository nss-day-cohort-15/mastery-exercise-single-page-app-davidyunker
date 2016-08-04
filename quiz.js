var CarLot = (function(carlot) {
  // carlot.activateEvents = function(inventory) {
  //   var carDisplay = document.querySelector(".placeCars").addEventListener("click", function (event){
  //     if (event.target.className === "eachCar") {
  //       change border width and background color //


  // event.target.parentElement.remove();




  //   });
  //   }




//   When you click on one of the car elements, change the width of the border to
// a higher value, and change the background color to any other color of your
// choosing. Also, on click of the car element, clear the value of the text input
// in the navbar, and put the cursor in the text input. When you start typing
// into the navbar's text input, the description of the currently selected car
// should be bound to what you are typing in and match it exactly.




carlot.populatePage = function (inventory) {
  var carDisplay = document.querySelector(".placeCars");
  inventory.forEach(function(cars) {
   carDisplay.innerHTML += `<div class="eachCar"> <h1>${cars.make}</h1> <p>${cars.model}</p> <p>${cars.year}</p> <p>${cars.price}</p <p>${cars.color}</p> <p>${cars.purchased}</p> <p>${cars.description}</p>
       </div>`
  });
  // Loop over the inventory and populate the page

  // Loop over your array of cars and build up an HTML string to build a card for
  // each car. Also, use Bootstrap to create rows. Each row should contain 3
  // columns. Make sure you have a parent element with a class of container.

  // Now that the DOM is loaded, establish all the event listeners needed

  // The second IIFE should augment the original one with a function that creates
  // all of the eventHandlers that you need for the application. Name the
  // function activateEvents.


}

// Load the inventory and send a callback function to be
// invoked after the process is complete

  // CarLot.activateEvents();

  return carlot;
})(CarLot)

CarLot.loadInventory(CarLot.populatePage);
