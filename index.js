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
      return 'please provide an array';
    }
    return a.sort((a,b)=> a-b);
  },
  
  // sorts an array of number in descending order
  sortDescend(a) {
    if(!Array.isArray(a)) {
      return 'please provide an array';
    }
    return a.sort((a,b)=> b-a);
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

  // returns the maximum number in an array
  returnMax(a) {
    if(!Array.isArray(a)) {
      return 'please provide an array';
    }
    return a.sort((a,b) => b-a)[0];
  },

  // returns the minimum number in an array
  returnMin(a) {
    if(!Array.isArray(a)) {
      return 'please provide an array';
    }
    return a.sort((a,b) => a-b)[0];
  },
};

console.log(simpleCodes.returnMin([5,5,2,89,32,19]));

module.exports = simpleCodes;
