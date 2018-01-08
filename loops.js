
function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function dowhileloop(array) {
  while maybeTrue() || array.length > 0 {
    delete array[0]
  }
}
