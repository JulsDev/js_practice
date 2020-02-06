function isCorrectSymbol(symbol) {
  if (symbol === 'A' || symbol === 'C' || symbol === 'G' || symbol === 'T') {
    return true;
  }
  return false;
}

function transformSymbol(symbol) {
  if(symbol === 'A') {
    symbol = 'U';
  } else if(symbol === 'C') {
    symbol = 'G';
  } else if(symbol === 'G') {
    symbol = 'C';
  }else if(symbol === 'T') {
    symbol = 'A';
  }
  return symbol;
}

function dnaToRna(str) {
  let newString = '';

  if(str === '') {
    return '';
  }

  for (let i = 0; i < str.length; ++i) {
    if(!isCorrectSymbol(str[i])) {
      return null;
    }
    newString = newString + transformSymbol(str[i]);
  }
  return newString;
}


const str1 = dnaToRna('AAATGC');
const str2 = dnaToRna('AAKLTGC');
const str3 = dnaToRna('');

console.log('str1: ', str1);
console.log('str2: ', str2);
console.log('str3: ', str3);