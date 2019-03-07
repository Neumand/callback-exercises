function findWaldo(arr, found) {
  arr.forEach(function(item) {
    if (item === "Waldo") {
      var indexOfItem = arr.indexOf(item);
      found(indexOfItem);
    }
  });
}

function actionWhenFound(indexOfItem) {
  console.log("Found Waldo at index " + indexOfItem);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
