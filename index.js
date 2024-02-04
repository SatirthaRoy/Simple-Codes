const simpleCodes = {
  isString(s) {
    return typeof s === 'string';
  },

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

  removeDuplicates(a) {
    if(!Array.isArray(a)) {
      return 'please provide an array';
    }
    return a.filter((item,i)=>a.lastIndexOf(item)==i);
  },

  sortAscend(a) {
    if(!Array.isArray(a)) {
      return 'please provide an array';
    }
    return a.sort((a,b)=> a-b);
  },
  
  sortDescend(a) {
    if(!Array.isArray(a)) {
      return 'please provide an array';
    }
    return a.sort((a,b)=> b-a);
  },

  sumOfAllNums(a) {
    if(!Array.isArray(a)) {
      return 'please provide an array';
    }
    return a.reduce((initial, value) => initial + value,0);
  }
};

//console.log(simpleCodes.sumOfAllNums([1,2,3,4,5]));

module.exports = simpleCodes;
