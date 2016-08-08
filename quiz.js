// on click of the car element, clear the value of the text input
// // in the navbar, and put the cursor in the text input.
// The second IIFE should augment the original one with a function that creates
  // all of the eventHandlers that you need for the application. Name the
  // function activateEvents.

var CarLot = (function(carlot) {
     carlot.populatePage = function (inventory) {
    var carDisplay = document.querySelector(".row")
      inventory.forEach(function(cars) {
      carDisplay.innerHTML += `<div class="col-md-3 col-md-offset-1 eachCar" style="border-color: ${cars.color}"> <h1 class="display-2">Make: ${cars.make}</h1> <p>Model: ${cars.model}</p> <p>Year: ${cars.year}</p> <p>Price: ${cars.price}</p <p>Color: ${cars.color}</p> <p>Available: ${cars.purchased}</p> <p>Description: ${cars.description}</p>
       </div>`
      })
carlot.activateEvents()
    }


      carlot.activateEvents = function() {
        var allCars = document.querySelectorAll(".eachCar")
        var userInput = document.querySelector(".user-input")
            allCars.forEach(function (cars) {
              cars.addEventListener("click", function(evt) {
                userInput.value = " "
                userInput.focus()
                CarLot.changeCars(evt.currentTarget, "black")
                userInput.addEventListener("keydown", CarLot.carDescriptionField())
              })
            })

        }

  return carlot
})(CarLot)

CarLot.loadInventory(CarLot.populatePage)
