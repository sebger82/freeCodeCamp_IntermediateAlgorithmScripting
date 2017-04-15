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

// Convert the given number into a roman numeral. ITERACYJNIE

function convertToRoman(num) {

  var arabicNumeral = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var string = '';

  for (var i = 0; i < arabicNumeral.length; i++) {
    while (arabicNumeral[i] <= num) {
      string += romanNumeral[i];
      num -= arabicNumeral[i];
    }
  }

  return string;
}

convertToRoman(36);
convertToRoman(36000);
convertToRoman(83);
convertToRoman(798);

// Convert the given number into a roman numeral. REKURENCYJNIE

function convertToRoman(num) {

  if (num > 0) {
  var arabicNumeral = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  for (var i = 0; i < arabicNumeral.length; i++) {
    if (num - arabicNumeral[i] === 0) {
      return romanNumeral[i];
    } else if (arabicNumeral[i] <= num) {
      return romanNumeral[i] + convertToRoman(num - arabicNumeral[i]);
      }
    }
  } else {
  throw "podano niewlasciwa wartosc"; //wlasnie sie dowiedzialem, ze warto dodawac do funkcji warunek bledu.
  }
}
convertToRoman(36);
convertToRoman(36000);
convertToRoman(83);
convertToRoman(-1);

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

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array. Base pairs are a pair of AT and CG. Match the missing element to the provided character. Return the provided character as the first element in each array.

function pairElement(str) {
  var tab = str.split('');
  
  for (var i =0; i < tab.length; i++) {
    if (tab[i] == 'A') {
      tab[i] = ['A','T'];
    } else if (tab[i] == 'T') {
      tab[i] = ['T','A'];
    } else if (tab[i] == 'G') {
      tab[i] = ['G','C'];
    } else {
      tab[i] = ['C','G'];
    }
  }
  return tab;
}

pairElement("CTCTA"); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]

// Check if a value is classified as a boolean primitive. Return true or false.

function booWho(bool) {
return typeof bool == 'boolean';
}

booWho(null);

// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

function uniteUnique(arr) {

    var newArray = [];

    for (var i = 0; i < arguments.length; i++) {
        var arrayFromArguments = arguments[i];

        for (var j = 0; j < arrayFromArguments.length; j++) {
            var indexValue = arrayFromArguments[j];
            if (newArray.indexOf(indexValue) < 0) {
                newArray.push(indexValue);
            }
        }
    }

    return newArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  var result = str.replace('\&', '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g ,'&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

  return result;
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML('Stuff in "quotation marks"');