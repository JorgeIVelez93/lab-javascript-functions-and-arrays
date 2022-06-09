// Iteration #1: Find the maximum
function maxOfTwoNumbers(a,b) {
  if ( a > b) {
    return a 
  } else {return b}
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arr) {
  if (arr.length === 0)
  { return null;
  }
   let longest = ``
   
 for (let i = 0; i < arr.length; i++) {
   if (arr[i].length > longest.length) {
     longest = arr[i]
   }  
 }
   return longest;
 }
 findLongestWord(words)

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(num) {
  if (num.length === 0) {
    return 0;
  }
  let sum = 0
  for (let i = 0; i < num.length; i++) {
    sum+=num[i]
  }
    return sum;
  }
  
  sumNumbers(numbers)

// Iteration #3.1 Bonus:
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(arr) {
  
let total = 0;
  
for (let i= 0; i < arr.length; i++) {
  if (typeof arr[i] === `object`){
    throw new Error ("Unsupported data type sir or ma'am")
  }
  else if (typeof arr[i] === 'string') {
  total+=arr[i].length
  } else if (typeof arr[i] === `true`) {
    total+=1
  }
  else {
    total+=arr[i];
  }

}
  
  return total;
}
sum(mixedArr)

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(num) {
  
if (num.length === 0) {
  return null
}
let sum = 0
for (let i = 0; i < num.length; i++) {
  sum+=num[i]
}
  
  return sum/num.length
}

averageNumbers(numbersAvg)

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength (word) {
  if (word.length === 0 ){
    return null
  }
let avg = 0
for (let i=0; i < word.length;i++){
  avg+=word[i].length/word.length
} 
return avg;
}
averageWordLength(wordsArr)

// Bonus - Iteration #4.1
function avg() {}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];
function uniquifyArray (word){
if (word.length === 0) {
  return null;
}
  let unique = [];
  for (let i = 0; i < word.length; i++) {
    if (unique.indexOf(word[i]) === -1) {
      unique.push(word[i]);
    }
  }
  return unique;
}
uniquifyArray(words)

// Bonus - Iteration #5.1: Unique arrays using Set

function uniquifyArrayWithSet() {}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsFind,search) {
  if (wordsFind.length === 0) {
    return null;
  }
  for (let i =0; i < wordsFind.length; i++) {
    if (wordsFind[i] === search) {
      return true;
    }
  }
  return false;
}
doesWordExist(wordsFind,'machine')

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(count,search) {
  if ( count.length === 0) {
    return 0;
  }
  let counter = 0;
  for (let i =0; i < count.length;i++) {
    if (count[i] === search) {
      counter++
    }
  }
    return counter;
  }
  howManyTimes(wordsCount,'')

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    uniquifyArrayWithSet
  };
}
