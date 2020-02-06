function invertCase(str) {
  let newStr = '';
  let curSymbol = '';

  for(let i = 0; i < str.length; ++i) {
    curSymbol = (str[i] === (str[i]).toUpperCase()) ? str[i].toLowerCase() : str[i].toUpperCase();
    newStr += curSymbol;  
  }

  return newStr;
}


const str = invertCase('HeLlo, WORLd!');
console.log(str);