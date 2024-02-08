const simpleCodes = {
  // returns true/false
  isString(s) {
    return typeof s === 'string';
  },

  //capitalize first letter of each word in a sentence
  capitalizeFirstLetter(s) {
    if(typeof s !== 'string') {
      return 'please provide string';
    }
    const a = s.split(' ');
    const b = a.map(word => {
      return word.replace(word[0], word[0].toUpperCase());
    });
    return b.join(' ');
  },

  // remove duplicates in an array
  removeDuplicates(a) {
    if(!Array.isArray(a)) {
      return 'please provide an array';
    }
    return a.filter((item,i)=>a.lastIndexOf(item)==i);
  },

  // sorts an array of number in ascending order
  sortAscend(a) {
    if(!Array.isArray(a)) {
      return 'please provide an array of numbers';
    }

    let hasStr = false;
    for(const item of a) {
      if(typeof item !== 'number') {
        hasStr = true;
      }
    }
    return hasStr ? 'please provide an array of only numbers' : a.sort((a,b)=> a-b);
  },
  
  // sorts an array of number in descending order
  sortDescend(a) {
    if(!Array.isArray(a)) {
      return 'please provide an array of numbers';
    }

    let hasStr = false;
    for(const item of a) {
      if(typeof item !== 'number') {
        hasStr = true;
      }
    }
    return hasStr ? 'please provide an array of only numbers' : a.sort((a,b)=> b-a);
  },


  // sum of all numbers in an array
  sumOfAllNums(a) {
    if(!Array.isArray(a)) {
      return 'please provide an array';
    }
    return a.reduce((initial, value) => initial + value,0);
  },

  // checks if even
  isEven(n) {
    if(typeof n !== 'number') {
      return 'please provide a number';
    }
    return n%2 == 0;
  },

  // checks if odd
  isOdd(n) {
    if(typeof n !== 'number') {
      return 'please provide a number';
    }
    return n%2 == 1;
  },

  // returns the maximum number/string in an array
  returnMax(a) {
    if(!Array.isArray(a)) {
      return 'please provide an array';
    }

    let hasStr = false;
    for(const item of a) {
      if(typeof item === 'string') {
        hasStr = true;
      } 
    }

    if(hasStr) {
      let biggestStr = ""+a[0];
      a.forEach(element => {
        biggestStr = biggestStr.length < element.length ? element : biggestStr;
      });
      return biggestStr;
    }

    return a.sort((a,b) => b-a)[0];
  },

  // returns the minimum number/string in an array
  returnMin(a) {
    if(!Array.isArray(a)) {
      return 'please provide an array';
    }

    let hasStr = false;
    for(const item of a) {
      if(typeof item === 'string') {
        hasStr = true;
      } 
    }

    if(hasStr) {
      let smallesttStr = ""+a[0];
      a.forEach(element => {
        smallesttStr = element.length < smallesttStr.length ? element : smallesttStr;
      });
      return smallesttStr;
    }

    return a.sort((a,b) => a-b)[0];
  },

  // EXPERIMENTAL FEATURE/////////////////////////////////////////////////////////////////////////
  calculate(strExpression) {
    let a = strExpression.split('');
    a = a.filter((item) => item !== ' ');
    // checks if the string is invalid or not
    for(i = 0;i< a.length;i++) { 
      if(isNaN(Number(a[i]))) {
        if(!((a[i] === '+') || (a[i] === '-') || (a[i] === '*') || (a[i] === '/') || (a[i] === '.'))) {
          return 'Invalid Expression';
        }
  
        if((a[i+1] === '+') || (a[i+1] === '-') || (a[i+1] === '*') || (a[i+1] === '/')) {
          return 'Invalid Expression';
        }
      }
    }
  
    if(isNaN(Number(a[a.length-1]))) {
      return 'Invalid Expression';
    }
  
    // splits the numbers and operators
    function splitNumbersOp (a) {
      let arr = [];
      let w ='';
      a.forEach((item,i) => {
        w += item;
        if(isNaN(Number(a[i+1])) && a[i+1] !== '.') {
          arr.push(String(Number(w)));
          w='';
        }
        if(isNaN(Number(item)) && item !== '.') {
          arr.push(w);
          w='';
        }
      });
      return arr;
    }
  
    let arr = splitNumbersOp(a);
  
    // mathematics starts here
    // checks division first
    let str = arr.join('');
    while(str.includes('/')) {
      let num1 = Number(arr[arr.lastIndexOf('/')-1]);
      let num2 = Number(arr[arr.lastIndexOf('/')+1]);
      str = str.replaceAll(`${num1}/${num2}`, `${num1/num2}`);
      a = str.split('');
      arr = splitNumbersOp(a);
    }
    //console.log(str);
    //checks multiplication second
    while(str.includes('*')) {
      let num1 = Number(arr[arr.lastIndexOf('*')-1]);
      let num2 = Number(arr[arr.lastIndexOf('*')+1]);
      str = str.replaceAll(`${num1}*${num2}`, `${num1*num2}`);
      a = str.split('');
      arr = splitNumbersOp(a);
      console.log(arr);
      console.log(str);
    }
    console.log(str);
  
    // checks addition third
    while(str.includes('+')) {
      let num1 = arr[arr.lastIndexOf('+')-2] === '-' ? Number(-arr[arr.lastIndexOf('+')-1]) : Number(arr[arr.lastIndexOf('+')-1]);
      let num2 = Number(arr[arr.lastIndexOf('+')+1]);
      let sign;
      if(arr[arr.lastIndexOf('+')-2] === '+') {
        sign = '+';
      } else if (arr[arr.lastIndexOf('+')-2] === '-') {
        sign = '-';
      }else {
        sign = '';
      }
  
      if((num1 + num2) > 0) {
        str = str.replaceAll(`${sign}${Math.abs(num1)}+${num2}`, `${num1+num2 === 0 ? '' : sign!== '' ? `+${num1+num2}` : num1+num2}`)
      }
      if((num1 + num2) <= 0) {
        str = str.replaceAll(`${sign}${Math.abs(num1)}+${num2}`, `${num1+num2 === 0 ? '0' : num1+num2}`);
      }
      if(arr.lastIndexOf('+') == 0) {
        str = str.replaceAll('+','');
      }
      a = str.split('');
      arr = splitNumbersOp(a);
    }
    //console.log(str);
  
    // checks substraction last
    while(str.includes('-') && arr.lastIndexOf('-') !== 0) {
      let num1 = arr[arr.lastIndexOf('-')-2] === '-' ? Number(-arr[arr.lastIndexOf('-')-1]) : Number(arr[arr.lastIndexOf('-')-1]);
      let num2 = Number(arr[arr.lastIndexOf('-')+1]);
      str = str.replaceAll(`${num1}-${num2}`, `${num1-num2}`);
      a = str.split('');
      arr = splitNumbersOp(a);
    }
    //console.log(str);
    
    return str;
  }, 
};

//console.log(simpleCodes.calculate('4.50*2'));

module.exports = simpleCodes;
