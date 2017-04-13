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

// Perform a search and replace on the sentence using the arguments provided and return the new sentence. NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
  if (before.toLowerCase() != before) {
    after = after.charAt(0).toUpperCase() + after.slice(1).toLowerCase();
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us get back to more Coding", "Coding", "algorithms");

// Translate the provided string to pig latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay". If a word begins with a vowel you just add "way" to the end.

function translatePigLatin(str) {
  var tab = str.split('');
  if (tab[0] == 'a' || tab[0] =='e' || tab[0] =='o' || tab[0] == 'i' || tab[0] =='u' || tab[0] == 'y') {
  var endOfWord = 'way';
  tab.push(endOfWord);
  return tab.join('');
  } else {
 var firstOfWord = '';
    do {
        firstOfWord += tab.shift();
    }
    while (tab[0] != 'a' && tab[0] !='e' && tab[0] !='o' && tab[0] != 'i' && tab[0] !='u' && tab[0] != 'y');
  var endClassic = 'ay';
  tab.push(firstOfWord,endClassic);
  return tab.join('');
  }
}

translatePigLatin("consonant");
translatePigLatin("california");