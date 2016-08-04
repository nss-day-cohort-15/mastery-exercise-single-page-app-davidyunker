var CarLot = (function () {
  var inventory = [];



// It should also expose a public getter to read the array of
//     // cars (e.g. getInventory).

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest()
      inventoryLoader.open('GET', 'inventory.json')
      inventoryLoader.addEventListener('load', function (evt) {
        inventory = JSON.parse(evt.target.responseText).cars
        callback(inventory)
      })
      inventoryLoader.send()
    },


    getInventory: function () {
      return inventory

    },



    // The first IIFE should add a public function (e.g. loadInventory) that
    // loads the inventory.json file and stores the inventory in a private
    // variable. The variable is inventory.



  }

})()


// in this instance inventory = messageArray and

