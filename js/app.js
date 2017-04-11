// Sum All Numbers in a Range

function sumAll(arr) {
var maximum = Math.max(arr[0], arr[1]);
var minimum = Math.min(arr[0], arr[1]);
var sum = 0;
for (var i = minimum; i <= maximum; i++){
  sum += i;
}
return(sum);
}

sumAll([1, 4]);

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  var newArr = [];
  
  for (var i=0; i < arr2.length; i++){
    if (arr1.indexOf(arr2[i]) < 0) {
      newArr.push(arr2[i]);
    }
  }
  for (var j=0; j< arr1.length; j++) {
    if (arr2.indexOf(arr1[j]) < 0) {
      newArr.push(arr1[j]);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);