// Least occuring element
// 9
// 1 5 6 4 56 56 56 6 4 2
const n = parseInt(userInput[0]);
const arr = userInput[1].split(' ').map(Number);


// Step 1:
// Iterate each element and find the occurence ( no of times it appeared in the array ) of the elements

var countedElements = []; // store all the element whose occurence is counted 
var occurenceArray = []; // store the elements occurence
// 0 1 2 3 4  5  6  7 8 9
// 1 5 6 4 56 56 56 6 4 2

for(var i=0;i<arr.length;i++) {
  var count = 0;
  if (!countedElements.includes(arr[i])) {
    for(var j=0;j<arr.length;j++) {
      if(arr[i] === arr[j]) {
        count = count + 1;
      }
    }
    occurenceArray.push(count);
    countedElements.push(arr[i]);
  }
}

var minOccurence = occurenceArray[0];
for(var i=0;i<occurenceArray.length; i++) {
  if (minOccurence > occurenceArray[i]) {
    minOccurence = occurenceArray[i];
  }
}


var resultArr = [];

for(var i=0;i<occurenceArray.length; i++) {
  if (minOccurence === occurenceArray[i]) {
    resultArr.push(countedElements[i].toString());
  }
}


resultArr.sort();

console.log(resultArr.reverse().join(' '));