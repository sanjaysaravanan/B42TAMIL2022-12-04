// You are given with an array of numbers, Your task is to print the difference of indices of largest and smallest number.All number are unique.

// Input Description:
// First line contains a number ‘n’. Then next line contains n space separated numbers.

// Output Description:
// Print the difference of indices of largest and smallest array

// Sample Input :
// 5
// "1 6 4 0 3" --> "1", "6"
// Sample Output :
// -2


// pseudo code or Algorithm
// userInput --> input array

// Step 1: Get the Inputs
const n = Number(userInput[0]);
// Array Input
// const arr = userInput[1].split(" ").map(Number); 
// ['1', '6', '4', '0', '3'] ---> [1, 6, 4, 0, 3]

const arr = [];

const strNums = userInput[1].split(" ");

for(var i=0; i<strNums.length;i++) {
  arr[i] = Number(strNums[i]);
}

console.log(arr);

// Step 2
// Find the Largest number
// Step 3
// Find the index along with Max
var max = arr[0];
var maxIndex = 0;

for (var i=0; i< arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i]; // index --> i
    maxIndex = i;
  }
}
//  0  1  2  3  4
// [1, 6, 4, 0, 3]
// i = 0, max = 1, maxIndex = 0 ---> max(1) < arr[0](1) --> max = 1, maxIndex = 0
// i = 1, max = 1, maxIndex = 0 ---> max(1) < arr[1](6) --> max = arr[1]; max = 1; --> max= 6, maxINdex = 1
// i = 2, max = 6, maxIndex = 1 ---> max(6) < arr[2](4) --> max = 6; maxIndex = 1
// i = 3, max = 6, maxIndex = 1 ---> max(6) < arr[3](0) --> max = 6; maxIndex = 1
// i = 4, max = 6, maxIndex = 1 ---> max(6) < arr[4](3) --> max = 6; maxIndex = 1

// console.log('Max Element',max, 'Max Index', maxIndex);

// Step 4
// Find the Smallest value number
// Step 5
// Find the index along with Min
var min = arr[0];
var minIndex = 0;

for (var i=0; i< arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i]; // index --> i
    minIndex = i;
  }
}

// console.log('Min Element',min, 'Min Index', minIndex);

console.log(maxIndex - minIndex);