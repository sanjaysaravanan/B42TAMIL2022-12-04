// Immediate Duplicate Digits
// 1331 --> 33 --> 11
// 14345578795 --> 55 --> 143478791
// 13322447 --> 33, 22, 44 --> 17
// 13331 --> 33, 33 --> 11
// Step 1: Get Inputs
const arrDigits = userInput[0].split('');
//    0    1    2    3
// [ '1', '3', '3', '1' ]

// Step 2:
// iterate and compare the digits
var resStr = '';

for(var i=0;i<arrDigits.length;i++) {
  // Step 2.1:
  // compare the next element ( arrDigits[i + 1]  ) with current element ( arrDigits[i] )

  if (arrDigits[i] === arrDigits[i+1]) {
    i = i + 1; // skipp the current and next element
  } else {
    resStr = resStr + arrDigits[i];
  }
}
