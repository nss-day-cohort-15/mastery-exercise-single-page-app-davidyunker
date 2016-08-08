// The final IIFE should augment the object with two more functions. One function
// resets the border thickness and background color for each car element back to
// the original values. The other function changes the thickness of the border of
// a car element, and changes its background color. The function must accept two
// arguments. A car DOM element that was clicked on. A color name.


var CarLot = (function(carlot) {


  carlot.changeCars = function (whichCar, whichColor) {
    carlot.resetCars()
    console.log(whichCar)
    console.log(whichColor)
    var thisCar = whichCar
    thisCar.classList.add(whichColor)
    }


  carlot.resetCars = function () {
    var eachCar = document.querySelectorAll(".eachCar")
    eachCar.forEach(function (cars) {
      console.log(cars)
      cars.classList.remove("black")
    })
  }

carlot.carDescriptionField = function () {
  var userInput = document.querySelector(".user-input").value
  var carPick = document.querySelector(".black")
  console.log(carPick.lastChild.previousSibling.innerText)
  console.log("typed thing", userInput)
  var carDescription = carPick.lastChild.previousSibling
  carDescription.innerText = userInput

}

return carlot

})(CarLot)
