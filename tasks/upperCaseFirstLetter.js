// Task: first letter must be in upperCase
const str = ' Hello,    my dear   friend!';

let arrStr = str.split(' ');
console.log("TCL: arrStr", arrStr);

const lengthStr = arrStr.length;
let newStr = '';

for(let i=0; i < lengthStr; ++i){
  if(arrStr[i] === '') {
    continue;
  } else {
    firstLetter = (arrStr[i][0]).toUpperCase();
    allLetter = (arrStr[i]).substring(1, arrStr[i].length);
    newStr = (i !== lengthStr - 1) ? newStr + firstLetter + allLetter + ' ' : newStr + firstLetter + allLetter;
  }
}

console.log("TCL: newStr", newStr);

